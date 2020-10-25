import * as Log4js from "log4js";

export default class SystemLogger {
  info(message: string): void {
    Log4js.getLogger("systemConsole").info(message);
    Log4js.getLogger("systemFile").info(message);
  }
  warn(message: string): void {
    Log4js.getLogger("systemConsole").warn(message);
    Log4js.getLogger("systemFile").warn(message);
  }
}
