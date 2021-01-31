const UsersProperty = {
  familyName: "familyName",
  givenName: "givenName",
  mail: "mail",
  address: "address",
  birthdate: "birthdate",
  dependent: "dependent",
  emergencyPhoneNumber: "emergencyPhoneNumber",
  facilityId: "facilityId",
  hireDate: "hireDate",
  leaveDate: "leaveDate",
  phoneNumber: "phoneNumber",
  professionType: "professionType",
  rollType: "rollType",
  socialInsuranceCode: "socialInsuranceCode",
  socialInsuranceNumber: "socialInsuranceNumber",
  staffCode: "staffCode",
  workDay: "workDay",
  workStyle: "workStyle",
  workTime: "workTime",
} as const;

type UsersProperty = typeof UsersProperty[keyof typeof UsersProperty];
export default UsersProperty;
