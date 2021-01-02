import express from "express";
import GetFacilities from "./frontRouting/getFacilities";
import PostFacilities from "./frontRouting/postFacilities";

const facilities = express.Router();

facilities.get("/", GetFacilities);

facilities.post("/", PostFacilities);

export default facilities;
