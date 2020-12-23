import express from "express";
import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import { PostUsersRouter } from "../backRouting";
import ValidateTimecardsPostParam from "../validate/validatePostParam";
import ValidateTimecardsQuery from "../validate/validateQuery";

export default async function FrontRoutingPostUsers(
  req: express.Request,
  res: express.Response
) {
      let rollId:string|undefined;
      let familyName:string|undefined;
      let givenName: string|undefined;
      let mail:string|undefined;
      let birthdate:DateTime|undefined;
      let address: string|undefined;
      let phoneNumber:string|undefined;
      let emergencyPhoneNumber:string|undefined;
      let dependent: ({familyName:string,givenName:string}[])|undefined;
      let facilityId:string|undefined ;
      let staffCode: string|undefined;
      let workStyleId:string|undefined;
	  let socialInsuranceId:string|undefined;
	  let hireDate:DateTime|undefined;
	  let leaveDate:DateTime|undefined;
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
  if (typeof request.socialInsuranceId === "string") {
    socialInsuranceId = request.socialInsuranceId;
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
  
  if (typeof request.dependent === "array") {
    dependent = request.dependent.map(name=>{return {familyName:name.familyName,givenName:name.givenName}});
  }
   

  const postParam = new ValidateUsersPostParam(
	rollId,familyName,givenName,mail,birthdate,address,phoneNumber,emergencyPhoneNumber,dependent,
	facilityId,staffCode,workStyleId,socialInsuranceId,hireDate,leaveDate
  ).createWithValid();

  if (postParam) {
    const response = await PostUsersRouter(postParam);
    res.json(response.parse());
  }
}
