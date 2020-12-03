const functions = require("firebase-functions");

import timecards from "./timecards";

export const helloWorld = functions.https.onRequest(
  (request: any, response: any) => {
    response.send(timecards);
  }
);
