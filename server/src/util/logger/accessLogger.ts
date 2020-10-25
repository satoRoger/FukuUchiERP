import * as Log4js from "log4js";

export default class AccessLogger {
  info(message: string): void {
    Log4js.getLogger("accessConsole").info(message);
    Log4js.getLogger("accessFile").info(message);
  }
  warn(message: string): void {
    Log4js.getLogger("accessConsole").warn(message);
    Log4js.getLogger("accessFile").warn(message);
  }
}
