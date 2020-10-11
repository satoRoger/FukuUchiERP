import TimecardDto from "../dataStructure/timecardDto";
import TransferToDto from "./transferToDto";
import {
  isEmployee,
  isCardType,
  isDate,
} from "../../service/utility/typeGuard";
import { TimecardDtoBuilder } from "../dataStructure/timecardDto";
import { isCoordinate } from "../../service/utility/typeGuard";

export default class TransferToTimecardDto implements TransferToDto {
  transfer: (...parameter: { id: string; val: unknown }[]) => TimecardDto = (
    ...parameter
  ) => {
    const builder = new TimecardDtoBuilder();
    parameter.forEach((data) => {
      if (data.id === "employee" && isEmployee(data.val)) {
        builder.setEmployeeId(data.val.getId().id());
      }
      if (data.id === "cardType" && isCardType(data.val)) {
        builder.setCardType(data.val);
      }
      if (data.id === "punchDate" && isDate(data.val)) {
        builder.setPunchDate(data.val);
      }
      if (data.id === "coodinate" && isCoordinate(data.val)) {
        builder.setCoordinate(data.val);
      }
    });
    return builder.build();
  };
}
