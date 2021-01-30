const EventsProperty = {
  start: "start",
  end: "end",
  title: "title",
  type: "type",
  userId: "userId",
  facilityId: "facilityId",
} as const;

type EventsProperty = typeof EventsProperty[keyof typeof EventsProperty];
export default EventsProperty;
