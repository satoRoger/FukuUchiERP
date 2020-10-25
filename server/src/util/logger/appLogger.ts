import * as Log4js from "log4js";

export default class AppLogger {
  info(message: string): void {
    Log4js.getLogger("appConsole").info(message);
    Log4js.getLogger("appFile").info(message);
  }
  warn(message: string): void {
    Log4js.getLogger("appConsole").warn(message);
    Log4js.getLogger("appFile").warn(message);
  }
}
