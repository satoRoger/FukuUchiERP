import { stringify } from "querystring";
import Employee from "../../entity/employee/employee";
import CardType from "../../valueObject/cardtype";
import Coordinate from "../../valueObject/coordinate";

export function isEmployee(v: any): v is Employee {
  return v instanceof Employee;
}

export function isCoordinate(v: any): v is Coordinate {
  return v instanceof Coordinate;
}

export function isCardType(v: any): v is CardType {
  if (typeof v === "string" && v in CardType) {
    return true;
  } else {
    return false;
  }
}

export function isDate(v: any): v is Date {
  return v instanceof Date;
}
