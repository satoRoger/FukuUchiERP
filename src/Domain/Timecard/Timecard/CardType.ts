const CardType = {
  ATTENDANCE: "ATTENDANCE",
  LEAVE_WORK: "LEAVE_WORK",
  TAKE_BREAK: "TAKE_BREAK",
  END_BREAK: "END_BREAK",
} as const;

type CardType = typeof CardType[keyof typeof CardType];

export default CardType;
