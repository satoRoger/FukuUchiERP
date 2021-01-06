import express from "express";
import GetFacilities from "./frontRouting/getFacilities";
import PostFacilities from "./frontRouting/postFacilities";

const facilities = express.Router();

facilities.get("/", validateFaciliesQuery,GetFacilities);

facilities.post("/", validateFacilitiesPostParam,PostFacilities);

export default facilities;
