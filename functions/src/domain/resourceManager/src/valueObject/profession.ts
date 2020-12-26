import ProfessionId from "./professionId";

const ProfessionValue = {
  doctor: "doctor",
  hygienist: "hygienist",
  clerk: "clerk",
  assistance: "assistance",
  reception: "reception",
} as const;

type ProfessionValue = typeof ProfessionValue[keyof typeof ProfessionValue];

export default class Profession {
  constructor(private _id: ProfessionId) {}
  public get id() {
    return this._id;
  }
}
