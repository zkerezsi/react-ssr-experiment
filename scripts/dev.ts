import { spawn } from "node:child_process";
import { context } from "esbuild";
import { serverConfig, clientConfig } from "./config.ts";

const serverContext = await context(serverConfig);
serverContext.watch();

const clientContext = await context(clientConfig);
clientContext.watch();

const childProcess = spawn("node", ["--watch", "dist/main.js"], {
  stdio: "inherit",
});

process.on("SIGINT", () => {
  if (childProcess) {
    childProcess.kill();
  }
  process.exit(0);
});
