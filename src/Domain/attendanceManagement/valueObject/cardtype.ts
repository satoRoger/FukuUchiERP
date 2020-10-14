const CardType = {
  Attendance: "attendance",
  Leavework: "leaveWork",
  Takebreak: "takeBreak",
  Endbreak: "endBreak",
} as const;
type CardType = typeof CardType[keyof typeof CardType];

export default CardType;