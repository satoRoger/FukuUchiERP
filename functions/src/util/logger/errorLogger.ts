import * as Log4js from "log4js";

export default class ErrorLogger {
  error(message: string): void {
    Log4js.getLogger("error").error(message);
  }
  fatal(message: string): void {
    Log4js.getLogger("error").fatal(message);
  }
}
