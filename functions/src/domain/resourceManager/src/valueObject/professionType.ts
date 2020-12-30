import ProfessionId from "./professionId";

const ProfessionType = {
  doctor: "doctor",
  hygienist: "hygienist",
  clerk: "clerk",
  assistance: "assistance",
  reception: "reception",
} as const;

type ProfessionType = typeof ProfessionType[keyof typeof ProfessionType];

export default ProfessionType;
