import express from "express";
import { DateTime } from "luxon";
import { PostUsersRouter } from "../backRouting";
import ValidateUsersPostParam from "../validate/validatePostParam";
import RollType from '../../../domain/resourceManager/src/valueObject/rollType';
import WorkStyle from "../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../domain/resourceManager/src/valueObject/worktime";
import UserAPIInterface from "../../../interactor/src/APIInterface/user/user";

export default async function PostUsers(
  req: express.Request,
  res: express.Response<UserAPIInterface[]>
) {
  let rollType: RollType | undefined;
  let familyName: string | undefined;
  let givenName: string | undefined;
  let mail: string | undefined;
  let birthdate: DateTime | undefined;
  let address: string | undefined;
  let phoneNumber: string | undefined;
  let emergencyPhoneNumber: string | undefined;
  let dependent: { familyName: string; givenName: string }[] | undefined;
  let facilityId: string | undefined;
  let staffCode: string | undefined;
  let workStyle: WorkStyle | undefined;
  let professionType: ProfessionType | undefined;
  let workTime: WorkTime | string | undefined;
  let socialInsuranceCode: string | undefined;
  let socialInsuranceNumber: string | undefined;
  let hireDate: DateTime | undefined;
  let leaveDate: DateTime | undefined;

  const request = req.body;
  if (
    request.rollType === RollType.manager ||
    request.rollType === RollType.user
  ) {
    rollType = request.rollType;
  }
  if (typeof request.familyName === "string") {
    familyName = request.familyName;
  }
  if (typeof request.givenName === "string") {
    givenName = request.givenName;
  }
  if (typeof request.mail === "string") {
    mail = request.mail;
  }
  if (typeof request.address === "string") {
    address = request.address;
  }
  if (typeof request.phoneNumber === "string") {
    phoneNumber = request.phoneNumber;
  }
  if (typeof request.emergencyPhoneNumber === "string") {
    emergencyPhoneNumber = request.emergencyPhoneNumber;
  }
  if (typeof request.facilityId === "string") {
    facilityId = request.facilityId;
  }
  if (typeof request.staffCode === "string") {
    staffCode = request.staffCode;
  }
  if (
    request.workStyle == WorkStyle.fulltime ||
    request.workStyle == WorkStyle.parttime
  ) {
    workStyle = request.workStyle;
  }
  if (
    request.professionType == ProfessionType.assistance ||
    request.professionType == ProfessionType.clerk ||
    request.professionType == ProfessionType.doctor ||
    request.professionType == ProfessionType.hygienist ||
    request.professionType == ProfessionType.reception
  ) {
    professionType = request.professionType;
  }
  if (
    typeof request.workTime === "string" ||
    request.workTime == WorkTime[14451930] ||
    request.workTime == WorkTime[8451330] ||
    request.workTime == WorkTime[8451745]
  ) {
    workTime = request.workTime;
  }
  if (typeof request.socialInsuranceCode === "string") {
    socialInsuranceCode = request.socialInsuranceCode;
  }
  if (typeof request.socialInsuranceNumber === "string") {
    socialInsuranceNumber = request.socialInsuranceNumber;
  }
  if (typeof request.birthdate === "string") {
    birthdate = DateTime.fromISO(request.birthdate);
  }
  if (typeof request.hireDate === "string") {
    hireDate = DateTime.fromISO(request.hireDate);
  }
  if (typeof request.leaveDate === "string") {
    leaveDate = DateTime.fromISO(request.leaveDate);
  }

  if (typeof request.dependent != "undefined") {
    dependent = request.dependent.map(
      (name: { familyName: string; givenName: string }) => {
        return { familyName: name.familyName, givenName: name.givenName };
      }
    );
  }

  console.log(rollType)
  console.log(mail)

  const postParam = new ValidateUsersPostParam(
    rollType,
    mail,
    familyName,
    givenName,
    birthdate,
    address,
    phoneNumber,
    emergencyPhoneNumber,
    dependent,
    facilityId,
    staffCode,
    workStyle,
    professionType,
    workTime,
    socialInsuranceCode,
    socialInsuranceNumber,
    hireDate,
    leaveDate
  ).createWithValid();

  if (postParam) {
    const response = await PostUsersRouter(postParam);
    res.json(response);
  }
}
