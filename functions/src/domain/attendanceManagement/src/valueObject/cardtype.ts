const CardType = {
  Attendance: "attendance",
  Leavework: "leavework",
  Takebreak: "takebreak",
  Endbreak: "endbreak",
} as const;
type CardType = typeof CardType[keyof typeof CardType];

export default CardType;