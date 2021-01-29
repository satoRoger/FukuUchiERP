import express from "express";
import { DeleteUsersRouter, PostUsersRouter, PutUsersRouter } from "../backRouting";
import UserAPIInterface from "../../../../interactor/src/APIInterface/user/user";
import { ValidationError, validationResult } from "express-validator";
import UsersPutParam from "../../../../interactor/src/InteractorObject/users/usersPutParam";
import UsersDeleteParam from "../../../../interactor/src/InteractorObject/users/usersDeleteParam";

export default async function DeleteUsers(
  req: express.Request,
  res: express.Response<string | { errors: ValidationError[] }>
) {
  try {
    const { userId } = req.params;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const deleteParam = new UsersDeleteParam(userId);

    const id = await DeleteUsersRouter(deleteParam);
    res.json(id);
  } catch (e) {
    return res.status(400).json({ errors: e });
  }
}
