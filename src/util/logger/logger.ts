import * as Path from "path";
import * as Config from "config";
import * as Log4js from "log4js";

const logger = new (class Logger {
  initialize() {
    let configure = Config.util.loadFileConfigs(Path.join(__dirname, "config"))
      .log4js;
    Log4js.configure(configure as Log4js.Configuration);
  }

  public LogAccessInfo(message: string): void {
    let logger = Log4js.getLogger("access");
    logger.info(message);
  }

  public LogAccessWarning(message: string): void {
    let logger = Log4js.getLogger("access");
    logger.warn(message);
  }

  public LogAccessError(message: string): void {
    let logger = Log4js.getLogger("access");
    logger.error(message);
  }

  public LogSystemInfo(message: string): void {
    let logger = Log4js.getLogger("system");
    logger.info(message);
  }

  public LogSystemWarning(message: string): void {
    let logger = Log4js.getLogger("system");
    logger.warn(message);
  }

  public LogSystemError(message: string): void {
    let logger = Log4js.getLogger("system");
    logger.error(message);
  }

  public LogError(message: string): void {
    let logger = Log4js.getLogger("error");
    logger.error(message);
  }
})();

export default logger;
