const path = require("path");

const root = path.join(__dirname, "../");

export default {
  log4js: {
    appenders: {
      access: {
        type: "file",
        filename: path.join(root, "./log/access/access.log"),
        maxLogSize: 5000000,
        backups: 6,
        compress: true,
      },
      error: {
        type: "file",
        filename: path.join(root, "./log/error/error.log"),
        maxLogSize: 5000000,
        backups: 6,
        compress: true,
      },
      system: {
        type: "file",
        filename: path.join(root, "./log/system/system.log"),
        maxLogSize: 5000000,
        backups: 6,
        compress: true,
      },
      debug: {
        type: "file",
        filename: path.join(root, "./log/debug/debug.log"),
        maxLogSize: 10000000,
        backups: 6,
        compress: true,
      },
      console: {
        type: "console",
      },
      stdout: {
        type: "stdout",
      },
    },
    categories: {
      default: {
        appenders: ["stdout"],
        level: "info",
      },
      accessConsole: {
        appenders: ["console", "stdout"],
        level: "warn",
      },
      appConsole: {
        appenders: ["console", "stdout"],
        level: "warn",
      },
      systemConsole: {
        appenders: ["console", "stdout"],
        level: "warn",
      },
      accessFile: {
        appenders: ["access", "system"],
        level: "info",
      },
      appFile: {
        appenders: ["system"],
        level: "info",
      },
      systemFile: {
        appenders: ["system"],
        level: "info",
      },
      error: {
        appenders: ["error", "system", "console", "stdout"],
        level: "warn",
      },
      debug: {
        appenders: ["stdout", "debug"],
        level: "debug",
      },
      traceFile: {
        appenders: ["debug"],
        level:"trace"
      }
    },
  },
};
