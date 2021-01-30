const TimecardsProperty = {
  cardType: "cardType",
  latitude: "latitude",
  longitude: "longitude",
  punchDate: "punchDate",
  userId: "userId",
} as const;

type TimecardsProperty = typeof TimecardsProperty[keyof typeof TimecardsProperty];
export default TimecardsProperty;
