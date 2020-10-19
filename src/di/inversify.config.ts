import { Container } from "inversify";
import dcontainer from "./inversifyDevelop.config";
import tContainer from './inversifyTest.config';

let container: Container = new Container();

switch (process.env.NODE_ENV) {
  case "development":
    container = dcontainer;
    break;
  case "test":
    container = tContainer;
    break;
  default:
  //エラー処理
}

export default container;
