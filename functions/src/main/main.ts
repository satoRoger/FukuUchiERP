import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
const bodyParser = require("body-parser");
import timecards from "../controller/src/timecards/frontRouting";
import users from "../controller/src/users/frontRouting";
import cors from "cors";
import events from "../controller/src/events/frontRouting";
import workflows from "../controller/src/workflows/frontRouting";
import facilities from "../controller/src/facility/frontRouting";
import { Settings } from "luxon";
Settings.defaultZoneName = "Asia/Tokyo";

const v1 = express();
v1.use(cors());
v1.use(bodyParser.urlencoded({ extended: true }));
v1.use(bodyParser.json());
v1.use("/users", users);
v1.use("/timecards", timecards);
v1.use("/events", events);
v1.use("/workflows", workflows);
v1.use("/facilities", facilities);

exports.v1 = functions.https.onRequest(v1);
