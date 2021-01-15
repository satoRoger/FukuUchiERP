import express from "express";
import PostTimecards from "../../interactor/src/timecard/postTimecards";
import validateTimecardsQuery from "./validate/validateQuery";

const auth = express.Router();

auth.post("/",validateAuthPostParam, PostAuth);


export default auth;
