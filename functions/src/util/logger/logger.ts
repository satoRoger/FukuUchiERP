import * as Path from "path";
import config = require("config");
import * as Log4js from "log4js";
import AccessLogger from "./accessLogger";
import SystemLogger from "./systemLogger";
import DebugLogger from "./debugLogger";
import ErrorLogger from "./errorLogger";
import AppLogger from "./appLogger";

class Logger {
  private accessLogger: AccessLogger;
  private systemLogger: SystemLogger;
  private debugLogger: DebugLogger;
  private errorLogger: ErrorLogger;
  private appLogger: AppLogger;

  constructor() {
    let configure = config.get("log4js");
    Log4js.configure(configure as Log4js.Configuration);

    this.accessLogger = new AccessLogger();
    this.systemLogger = new SystemLogger();
    this.debugLogger = new DebugLogger();
    this.errorLogger = new ErrorLogger();
    this.appLogger = new AppLogger();
  }

  get access(): AccessLogger {
    return this.accessLogger;
  }
  get system(): SystemLogger {
    return this.systemLogger;
  }
  get debug(): DebugLogger {
    return this.debugLogger;
  }
  get error(): ErrorLogger {
    return this.errorLogger;
  }

  get app(): AppLogger {
    return this.appLogger;
  }
}

const logger = new Logger();

export default logger;
