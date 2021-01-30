const FacilitiesProperty = {
  name: "name",
} as const;

type FacilitiesProperty = typeof FacilitiesProperty[keyof typeof FacilitiesProperty];
export default FacilitiesProperty;
