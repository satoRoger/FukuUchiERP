import container from "../../../../util/di/inversify.config";
import RollId from "./rollId";

const RollValue = {
  manager: "manager",
  user: "user",
} as const;

type RollValue = typeof RollValue[keyof typeof RollValue];

export default class Roll {
  constructor(private _id: RollId) {}
  public get id() {
    return this._id;
  }
}
