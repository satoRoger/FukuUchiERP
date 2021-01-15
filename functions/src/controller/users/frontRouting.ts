import express from "express";
import DeleteUsers from "./frontRouting/deleteUsers";
import GetUsers from "./frontRouting/getUsers";
import PostUsers from "./frontRouting/postUsers";
import PutUsers from "./frontRouting/putUsers";
import validateUsersDeleteParam from "./validate/validateDeleteParam";
import validateUsersPostParam from "./validate/validatePostParam";
import validateUsersPutParam from "./validate/validatePutParam";
import validateUsersQuery from "./validate/validateQuery";

const users = express.Router();

users.get("/", validateUsersQuery, GetUsers);

users.get("/:usersId", validateUsersQuery, GetUsers);

users.post("/", validateUsersPostParam, PostUsers);

users.put("/:userId", validateUsersPutParam, PutUsers);

users.delete("/:userId", validateUsersDeleteParam, DeleteUsers);

export default users;
