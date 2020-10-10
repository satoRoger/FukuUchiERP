import { stringify } from "querystring";
import Employee from "../../employee/employee";
import { CardType, Coordinate } from "../../timecard/valueObjects";

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
