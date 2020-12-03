import * as Log4js from "log4js";

export default class DebugLogger {
  debug(message: string): void {
    Log4js.getLogger("debug").debug(message);
  }
  traceMethodCall(
    target: any,
    propKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const original = descriptor.value;
    descriptor.value = function () {
      const key = `${target.constructor.name}#${propKey}`;
      Log4js.getLogger("traceFile").trace(`${key}: start`);
      const ret = Reflect.apply(original, this, arguments);
      return ret;
    };
  }
}
