import TestTypes from "./testTypes";
import DevelopTypes from "./developTypes";

let Types = undefined;

switch (process.env.NODE_ENV) {
  case "development":
    Types = DevelopTypes;
    break;
  case "test":
    Types = TestTypes;
    break;
  default:
  //エラー処理
}

export default Types;
