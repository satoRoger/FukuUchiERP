const RollType = {
  manager: "manager",
  user: "user",
} as const;

type RollType = typeof RollType[keyof typeof RollType];
export default RollType;
