const WorkDate = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
} as const;

type WorkDate = typeof WorkDate[keyof typeof WorkDate];

export default WorkDate;
