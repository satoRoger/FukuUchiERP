import express from "express";
import PostTimecards from "../../interactor/src/timecard/postTimecards";
import PutTimecardsIdQuery from "../timecards/frontRouting/putTimecardsIdQuery";
import DeleteTimecardsIdQuery from "./frontRouting/deleteUsersIdQuery";
import GetUserById from "./frontRouting/getUserById";
import GetUsers from "./frontRouting/getUsers";
import GetUserTimecards from "./frontRouting/getUserTimecards";
import PostUsers from "./frontRouting/postUsers";

const users = express.Router();

users.get("/", GetUsers);

users.get("/:usersId", GetUserById);

users.get("/:userId/timecards", GetUserTimecards);

users.post("/", PostUsers);

users.put("/:usersId", PutTimecardsIdQuery);

users.delete("/:usersId", DeleteTimecardsIdQuery);

export default users;
