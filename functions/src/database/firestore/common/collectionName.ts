const CollectionName = {
  events: "events",
  users: "users",
  facilities: "facilities",
  timecards: "timecards",
  workflows: "workflows",
} as const;

type CollectionName = typeof CollectionName[keyof typeof CollectionName];
export default CollectionName;
