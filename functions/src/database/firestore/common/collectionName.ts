const CollectionName = {
  events: "events",
  users: "users",
  facilities: "facilities",
  timecards: "timecards",
  workflows: "workflows",
  approverList:"approverList"
} as const;

type CollectionName = typeof CollectionName[keyof typeof CollectionName];
export default CollectionName;
