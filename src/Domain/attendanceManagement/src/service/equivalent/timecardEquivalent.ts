import Timecard from "../../entity/timecard/Timecard";
import { isUndefined } from "../../common/utility";

export default class TimecardEquivalent {
  constructor(private a: Timecard, private b: Timecard) {}

  equal: () => boolean = () => {
    let same: boolean = true;
    same &&= this.a.hasCoordinate() === this.b.hasCoordinate();
    if (this.a.hasCoordinate() && this.b.hasCoordinate()) {
      same &&= this.a.getCoordinate().equal(this.b.getCoordinate());
    }
    same &&= this.a.getPunchDate() === this.b.getPunchDate();
    same &&= this.a.punchEmployeeId().equal(this.b.punchEmployeeId());
    same &&= this.a.isAttendance() === this.b.isAttendance();
    same &&= this.a.isLeavework() === this.b.isLeavework();
    same &&= this.a.isTakebreak() === this.b.isTakebreak();
    same &&= this.a.isEndbreak() === this.b.isEndbreak();
    return same;
  };
}
