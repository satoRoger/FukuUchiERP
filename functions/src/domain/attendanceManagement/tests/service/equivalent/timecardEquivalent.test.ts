import Timecard from "src/domain/attendanceManagement/src/entity/timecard/Timecard";
import Coordinate from "src/domain/attendanceManagement/src/valueObject/coordinate";
import EntityFactory from "../../../src/entity/entityFactory";
import CardType from "../../../src/valueObject/cardtype";
import TimecardEquivalent from "../../../src/service/equivalent/timecardEquivalent";
import { DateTime } from 'luxon';
describe("タイムカード等価比較ロジック", () => {
  let timecardA: Timecard;
  let timecardB: Timecard;
  let timecardC: Timecard;
  let timecardD: Timecard;
  let timecardE: Timecard;

  let timecardANoC: Timecard;
  let timecardBNoC: Timecard;
  let timecardCNoC: Timecard;
  let timecardDNoC: Timecard;

  beforeAll(() => {
    const employeeA = new EntityFactory().employee().createByRowId("test01");
    const employeeB = new EntityFactory().employee().createByRowId("test02");
    const coordinateA = new Coordinate(20, 20);
    const coordinateB = new Coordinate(10, 10);
    const cardtypeA = CardType.Attendance;
    const cardtypeB = CardType.Leavework;

    const punchDateA = DateTime.fromISO("2020-10-10T05:05:05");
    const punchDateB = DateTime.fromISO("2020-10-10T05:05:05");

    timecardA = new Timecard(employeeA, cardtypeA, punchDateA, coordinateA);
    timecardB = new Timecard(employeeA, cardtypeA, punchDateA, coordinateB);
    timecardC = new Timecard(employeeA, cardtypeA, punchDateB, coordinateA);
    timecardD = new Timecard(employeeA, cardtypeB, punchDateA, coordinateA);
    timecardE = new Timecard(employeeB, cardtypeA, punchDateA, coordinateA);

    timecardANoC = new Timecard(employeeA, cardtypeA, punchDateA);
    timecardBNoC = new Timecard(employeeA, cardtypeA, punchDateB);
    timecardCNoC = new Timecard(employeeA, cardtypeB, punchDateA);
    timecardDNoC = new Timecard(employeeB, cardtypeA, punchDateA);
  });

  test("同じオブジェクトを評価", () => {
    expect(new TimecardEquivalent(timecardA, timecardA).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardA, timecardC).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardB, timecardB).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardC, timecardC).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardD, timecardD).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardE, timecardE).equal()).toBe(true);

    expect(new TimecardEquivalent(timecardANoC, timecardANoC).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardBNoC, timecardBNoC).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardCNoC, timecardCNoC).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardDNoC, timecardDNoC).equal()).toBe(true);
  });
  test("異なるオブジェクトを評価", () => {
    expect(new TimecardEquivalent(timecardA, timecardB).equal()).toBe(false);
    expect(new TimecardEquivalent(timecardA, timecardC).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardA, timecardD).equal()).toBe(false);
    expect(new TimecardEquivalent(timecardA, timecardE).equal()).toBe(false);
  });

  test('座標なしを比較', () => {
    expect(new TimecardEquivalent(timecardANoC, timecardBNoC).equal()).toBe(true);
    expect(new TimecardEquivalent(timecardANoC, timecardCNoC).equal()).toBe(false);
    expect(new TimecardEquivalent(timecardANoC, timecardDNoC).equal()).toBe(false);
  });
  test('座標ありと無しを比較', () => {
    expect(new TimecardEquivalent(timecardA, timecardANoC).equal()).toBe(false);
    expect(new TimecardEquivalent(timecardB, timecardBNoC).equal()).toBe(false);
    expect(new TimecardEquivalent(timecardC, timecardCNoC).equal()).toBe(false);
    expect(new TimecardEquivalent(timecardD, timecardDNoC).equal()).toBe(false);
  });
});
