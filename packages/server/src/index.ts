import { dirname, join } from 'path'
import HTTP from 'http'
import { createReactiveFileSystem } from '@snoka/reactive'
import { ApolloServer, PubSub } from 'apollo-server-express'
import historyFallback from 'express-history-api-fallback'
import express from 'express'
import { makeSchema } from 'nexus'
import consola from 'consola'
import { setupConfigLoader } from '@snoka/config'
import type { Context } from './context'
import * as types from './schema'
import { setupRunWatch } from './watch'
import { run } from './run'
import { loadTestFiles } from './schema'

export async function createServer () {
  const schema = makeSchema({
    types,
    outputs: {
      typegen: join(__dirname, '..', 'src', 'generated', 'nexus-typegen.ts'),
      schema: join(__dirname, '..', 'src', 'generated', 'schema.graphql'),
    },
    contextType: {
      module: join(__dirname, '..', 'src', 'context.d.ts'),
      export: 'Context',
    },
  })

  const configLoader = await setupConfigLoader()
  const config = await configLoader.loadConfig()

  const reactiveFs = await createReactiveFileSystem({
    baseDir: config.targetDirectory,
    glob: config.match,
    ignored: config.ignored,
  })
  const pubsub = new PubSub()

  function createContext (): Context {
    return {
      config,
      reactiveFs,
      pubsub,
    }
  }

  await loadTestFiles(createContext())
  await setupRunWatch(createContext())

  const apollo = new ApolloServer({
    schema,
    context: createContext,
    playground: true,
    subscriptions: {
      path: '/api',
    },
    formatError (error) {
      consola.error(error)
      consola.log(JSON.stringify(error, null, 2))
      return error
    },
  })

  const app = express()
  const http = HTTP.createServer(app)

  apollo.applyMiddleware({
    app,
    path: '/api',
  })
  apollo.installSubscriptionHandlers(http)

  const staticRoot = join(dirname(require.resolve('@snoka/client-dist/package.json')), 'dist')
  app.use(express.static(staticRoot))
  app.use(historyFallback('index.html', { root: staticRoot }))

  // (Don't await)
  run(createContext(), {
    testFileIds: null,
  })

  return {
    apollo,
    app,
    http,
  }
}
