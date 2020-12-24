import express from "express";
import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import { PostUsersRouter } from "../backRouting";
import ValidateUsersPostParam from "../validate/validatePostParam";
import ValidateTimecardsPostParam from "../validate/validatePostParam";
import ValidateTimecardsQuery from "../validate/validateQuery";
import ProfessionId from "../../../domain/resourceManager/src/valueObject/professionId";

export default async function FrontRoutingPostUsers(
  req: express.Request,
  res: express.Response
) {
  let rollId: string | undefined;
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
  let workStyleId: string | undefined;
  let professionId: string | undefined;
  let workTimeId: string | undefined;
  let socialInsuranceCode: string | undefined;
  let socialInsuranceNumber: string | undefined;
  let hireDate: DateTime | undefined;
  let leaveDate: DateTime | undefined;

  const request = JSON.parse(req.body);

  if (typeof request.rollId === "string") {
    rollId = request.rollId;
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
  if (typeof request.workStyleId === "string") {
    workStyleId = request.workStyleId;
  }
  if (typeof request.professionId === "string") {
    professionId = request.professionId;
  }
  if (typeof request.workTimeId === "string") {
    workTimeId = request.workTimeId;
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

  const postParam = new ValidateUsersPostParam(
    rollId,
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
    workStyleId,
    professionId,
    workTimeId,
    socialInsuranceCode,
    socialInsuranceNumber,
    hireDate,
    leaveDate
  ).createWithValid();

  if (postParam) {
    const response = await PostUsersRouter(postParam);
    res.json(response.parse());
  }
}
