import express from "express";
import GetUsers from "./frontRouting/getUsers";
import PostUsers from "./frontRouting/postUsers";
import validateUsersPostParam from "./validate/validatePostParam";
import validateUsersQuery from "./validate/validateQuery";

const users = express.Router();

users.get("/", validateUsersQuery, GetUsers);

users.get("/:usersId", validateUsersQuery, GetUsers);

users.post("/", validateUsersPostParam, PostUsers);

export default users;
