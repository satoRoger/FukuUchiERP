const CardType = {
  Attendance: "attendance",
  LeaveWork: "leaveWork",
  TakeBreak: "takeBreak",
  EndBreak: "endBreak",
} as const;
type CardType = typeof CardType[keyof typeof CardType];

export default CardType;