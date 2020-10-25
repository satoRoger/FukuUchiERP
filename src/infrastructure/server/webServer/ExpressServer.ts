import WebServer from "./webServer";
import express from "express";
import logger from "@/util/logger/logger";

export default class ExpressServer implements WebServer {
  constructor(private app: express.Express) {}

  listen(port: number, hostname: string): void {
    this.app.listen(port, hostname, () => {
      logger.app.info(
        `Expressサーバが起動しました#ポート:${port}#hostname:${hostname}`
      );
    });
  }
}
