const ProfessionValue = {
  doctor: "doctor",
  hygienist: "hygienist",
  clerk: "clerk",
  assistance: "assistance",
  reception: "reception",
} as const;

type ProfessionValue = typeof ProfessionValue[keyof typeof ProfessionValue];

export default class Profession {
  constructor(private profession: ProfessionValue) {}
  public get value() {
    return this.profession;
  }
}
