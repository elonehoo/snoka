import { startStandaloneServer } from '@apollo/server/standalone'
import { createServer } from '.'

const server = createServer()

startStandaloneServer(server, {
  context: async () => {
    return process.env.PORT || 4000
  },
}).then((res) => {
  console.log(`🚀 Server ready at ${res.url}`)
})
