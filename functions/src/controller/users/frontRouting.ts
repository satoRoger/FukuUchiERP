import express from "express";
//import users from "../commonController";
const users = express.Router();

users.get(
  "/:userId/timecards",
  (req: express.Request, res: express.Response) => {
    res.send("Hello Express!");
  }
);

export default users;
