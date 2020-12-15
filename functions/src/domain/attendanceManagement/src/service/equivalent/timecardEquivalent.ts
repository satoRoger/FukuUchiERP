import Timecard from "../../entity/timecard/Timecard";
import { isUndefined } from "../../common/utility";
import { isCoordinate } from "../utility/typeGuard";

export default class TimecardEquivalent {
  constructor(private a: Timecard, private b: Timecard) {}

  equal(): boolean {
    let same: boolean = true;
    same &&= this.a.hasCoordinate === this.b.hasCoordinate;

    const aCoordinate = this.a.coordinate;
    const bCoordinate = this.b.coordinate;
    if (isCoordinate(aCoordinate) && isCoordinate(bCoordinate)) {
      same &&= aCoordinate.equal(bCoordinate);
    }

    same &&= this.a.punchDate.equals(this.b.punchDate);
    same &&= this.a.punchEmployeeId.equal(this.b.punchEmployeeId);
    same &&= this.a.attendance === this.b.attendance;
    same &&= this.a.leavework === this.b.leavework;
    same &&= this.a.takebreak === this.b.takebreak;
    same &&= this.a.endbreak === this.b.endbreak;
    return same;
  }
}
