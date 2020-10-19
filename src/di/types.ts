import "reflect-metadata";
import TestTypes from "./testTypes";
import DevelopTypes from "./developTypes";
let Types: TestTypes | DevelopTypes = DevelopTypes;

switch (process.env.NODE_ENV) {
  case "test":
    Types = TestTypes;
    break;
  default:
  //エラー処理
}

export function isDevelopTypes(types: typeof Types): types is DevelopTypes {
  return typeof types === typeof DevelopTypes;
}

export function isTestTypes(types: typeof Types): types is TestTypes {
  return typeof types === typeof TestTypes;
}

export default Types;
