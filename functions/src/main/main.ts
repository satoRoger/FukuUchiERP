import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
const bodyParser = require("body-parser");
import timecards from "../controller/timecards/frontRouting";
import users from "../controller/users/frontRouting";

const v1 = express();
v1.use(bodyParser.urlencoded({ extended: true }));
v1.use("/users", users);
v1.use("/timecards", timecards);


exports.v1 = functions.https.onRequest(v1);

//exports.timecards = functions.https.onRequest(timecards);
//exports.users = functions.https.onRequest(users);
/*
functions.https.onRequest((request: functions.https.Request, response: any) => {
  response.send(timecards);
});
*/
