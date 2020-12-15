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
        maxLogSize: 5000000,
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
        appenders: ["access", "console", "stdout"],
        level: "INFO",
      },
      access: {
        appenders: ["access", "console", "stdout"],
        level: "INFO",
      },
      system: {
        appenders: ["system", "console", "stdout"],
        level: "INFO",
      },
      error: {
        appenders: ["error", "console", "stdout"],
        level: "WARN",
      },
      debug: {
        appenders: ["console", "stdout", "debug"],
        level: "debug",
      },
      trace: {
        appenders: ["console", "stdout", "debug"],
        level: "trace",
      },
    },
  },
};
