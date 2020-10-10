import Timecard from "../../timecard/timecard";
import TimecardDto from "../dataStructure/timecardDto";
import TransferToDto from "./transferToDto";
import TimecardDTO from "@/domain/attendanceManagement/dto/dataStructure/timecardDto";
import { isEmployee } from "../../service/utility/typeGuard";
import { stringify } from "querystring";
import { Coordinate } from "../../timecard/valueObjects";
import { TimecardDtoBuilder } from "../dataStructure/timecardDto";

export default class TransferToTimecardDto implements TransferToDto {
  transfer: (...parameter: { id: string; val: unknown }[]) => TimecardDto = (
    ...parameter
  ) => {
    const builder = new TimecardDtoBuilder();
    parameter.forEach((data) => {
      if (isEmployee(data.val)) {
        builder.setEmployeeId(data.val.getId().id());
      }
      if (data.id === "cardType") {
      }
      if (data.id === "punchDate") {
      }
      if (data.id === "coodinate") {
      }
    });
    return builder.build();
  };
}
