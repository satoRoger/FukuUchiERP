import { Container } from "inversify";
import DiOnDevelop from "./inversifyDevelop.config";
import DiOnTest from "./inversifyTest.config";

let container: Container = undefined;

switch (process.env.NODE_ENV) {
  case "development":
    container = DiOnDevelop();
    break;
  case "test":
    container = DiOnTest();
    break;
  default:
  //エラー処理
}

export default container;
