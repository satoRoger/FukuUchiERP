import express from "express";
import PostTimecards from "../../interactor/src/timecard/postTimecards";
import PutTimecardsIdQuery from "../timecards/frontRouting/putTimecardsIdQuery";
import DeleteTimecardsIdQuery from "./frontRouting/deleteUsersIdQuery";
import GetUserById from "./frontRouting/getUserById";
import GetUsers from "./frontRouting/getUsers";
import GetUserTimecards from "./frontRouting/getUserTimecards";
import PostUsers from "./frontRouting/postUsers";

const users = express.Router();

users.get("/",validateUsersQuery, GetUsers);

users.get("/:usersId", validateUsersQuery,GetUsers);

users.get("/:userId/timecards", validateTimecardsQuery,GetTimecards);

users.post("/",validateUsersPostParam, PostUsers);

export default users;
