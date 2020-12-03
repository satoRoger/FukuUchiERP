import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import timecards from "../controller/timecards";

exports.timecards = functions.https.onRequest(timecards);
/*
functions.https.onRequest((request: functions.https.Request, response: any) => {
  response.send(timecards);
});
*/
