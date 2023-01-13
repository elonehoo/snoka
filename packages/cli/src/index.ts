#!/usr/bin/env node
import { Command } from 'commander'

const program = new Command()
/* eslint-disable @typescript-eslint/no-var-requires */
program.version(require('../package.json').version)

program.parse()
