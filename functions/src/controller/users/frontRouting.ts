import express from "express";
import PostTimecards from "../../interactor/src/timecard/postTimecards";
import GetUsers from "../../interactor/src/users/getUsers";
import PutTimecardsIdQuery from "../timecards/frontRouting/putTimecardsIdQuery";
import DeleteTimecardsIdQuery from "./frontRouting/deleteUsersIdQuery";
import GetUserById from "./frontRouting/getUserById";
import GetUserTimecards from "./frontRouting/getUserTimecards";

const users = express.Router();

users.get("/", GetUsers);

users.get("/:usersId", GetUserById);

users.get("/:userId/timecards", GetUserTimecards);

users.post("/", PostTimecards);

users.put("/:usersId", PutTimecardsIdQuery);

users.delete("/:usersId", DeleteTimecardsIdQuery);

export default users;
