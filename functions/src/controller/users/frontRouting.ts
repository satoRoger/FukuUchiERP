import express from "express";
import PostTimecards from "../../interactor/timecard/postTimecards";
import GetUsers from "../../interactor/users/getUsers";
import GetTimecardsIdQuery from "../timecards/frontRouting/getTimecardsIdQuery";
import PutTimecardsIdQuery from "../timecards/frontRouting/putTimecardsIdQuery";
import DeleteTimecardsIdQuery from "./frontRouting/deleteUsersIdQuery";

const users = express.Router();

users.get("/", GetUsers);

users.get("/:usersId", GetTimecardsIdQuery);

users.post("/", PostTimecards);

users.put("/:usersId", PutTimecardsIdQuery);

users.delete("/:usersId", DeleteTimecardsIdQuery);

export default users;
