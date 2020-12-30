const WorkTime = {
  0845_1330: "0845_1330",
  0845_1745: "0845_1745",
  1445_1930: "1445_1930",
} as const;
type WorkTime = typeof WorkTime[keyof typeof WorkTime];

export default WorkTime;
