import express from "express";
import { DateTime } from "luxon";
import { PostUsersRouter } from "../backRouting";
import ValidateUsersPostParam from "../validate/validatePostParam";
import RollType from "../../../domain/resourceManager/src/valueObject/rollType";
import WorkStyle from "../../../domain/resourceManager/src/valueObject/workStyle";
import ProfessionType from "../../../domain/resourceManager/src/valueObject/professionType";
import WorkTime from "../../../domain/resourceManager/src/valueObject/worktime";
import UserAPIInterface from "../../../interactor/src/APIInterface/user/user";
import UsersPostParam from "../../../interactor/src/InteractorObject/users/usersPostParam";
import { ValidationError, validationResult } from "express-validator";

export default async function PostUsers(
  req: express.Request,
  res: express.Response<UserAPIInterface[] | { errors: ValidationError[] }>
) {
  const {
    rollType,
    familyName,
    givenName,
    mail,
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
    leaveDate,
  } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const postParam = new UsersPostParam(
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
  );

  const response = await PostUsersRouter(postParam);
  res.json(response);
}
