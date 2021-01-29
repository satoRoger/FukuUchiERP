import express from "express";
import { DateTime } from "luxon";
import ValidateUsersQuery from "../validate/validateQuery";
import { GetUsersRouter } from "../backRouting";
import UserAPIInterface from "../../../../../interactor/src/APIInterface/user/user";
import { ValidationError, validationResult } from "express-validator";
import UsersQuery from "../../../../../interactor/src/InteractorObject/users/usersQuery";

export default async function GetUsers(
  req: express.Request,
  res: express.Response<UserAPIInterface[] | { errors: ValidationError[] }>
) {
  const { userId } = req.params;
  const { facilityId } = req.query;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const query = new UsersQuery(userId, facilityId);
  const response = await GetUsersRouter(query);
  res.json(response);
}
