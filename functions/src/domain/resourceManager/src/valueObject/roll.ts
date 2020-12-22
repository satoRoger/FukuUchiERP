import container from "../../../../util/di/inversify.config";

const RollValue = {
  manager: "manager",
  user: "user",
} as const;

type RollValue = typeof RollValue[keyof typeof RollValue];

export default class Roll {
  constructor(private roll: RollValue) {}
  public get value() {
    return this.roll;
  }
}
