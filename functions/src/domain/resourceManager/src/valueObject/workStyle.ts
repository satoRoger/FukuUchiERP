const WorkStyle = {
  fulltime: "fulltime",
  parttime: "parttime"
} as const;
type WorkStyle = typeof WorkStyle[keyof typeof WorkStyle];

export default WorkStyle;
