const EventType = {
  UserVacation: "userVacation",
  FacilityHoliday: "facilityHoliday",
} as const;
type EventType = typeof EventType[keyof typeof EventType];

export default EventType;
