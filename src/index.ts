#!/usr/bin/env node

import { NanoBananaMCPServer } from './server.js';

async function main(): Promise<void> {
  try {
    const server = new NanoBananaMCPServer();
    await server.run();
  } catch (error) {
    console.error('Failed to start Nano Banana MCP server:', error);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}