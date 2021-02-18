import express from "express";
import { PostUsersRouter, PutUsersRouter } from "../backRouting";
import UserAPIInterface from "../../../../../interactor/src/APIInterface/user/user";
import { ValidationError, validationResult } from "express-validator";
import UsersPutParam from "../../../../../interactor/src/InteractorObject/users/usersPutParam";

export default async function PutUsers(
  req: express.Request,
  res: express.Response<UserAPIInterface[] | { errors: ValidationError[] }>
) {
  try {
    const {
      rollType,
      fullname,
      mail,
      birthdate,
      address,
      phoneNumber,
      emergencyPhoneNumber,
      dependent,
      facilityId,
      staffCode,
      workStyle,
      workDay,
      profession,
      workStartTime,
      workEndTime,
      workTime,
      socialInsuranceCode,
      socialInsuranceNumber,
      hireDate,
      leaveDate,
    } = req.body;

    const { userId } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const putParam = new UsersPutParam(
      userId,
      rollType,
      mail,
      fullname.familyName,
      fullname.givenName,
      {
        birthdate: birthdate,
        address: address,
        phoneNumber: phoneNumber,
        emergencyPhoneNumber: emergencyPhoneNumber,
        dependent: dependent,
        facilityId: facilityId,
        staffCode: staffCode,
        workStyle: workStyle,
        workDay: workDay,
        profession: profession,
        workStartTime: workStartTime,
        workEndTime: workEndTime,
        workTime: workTime,
        socialInsuranceCode: socialInsuranceCode,
        socialInsuranceNumber: socialInsuranceNumber,
        hireDate: hireDate,
        leaveDate: leaveDate,
      }
    );

    const response = await PutUsersRouter(putParam);
    res.json(response);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
}
