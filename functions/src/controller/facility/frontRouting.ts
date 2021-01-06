import express from "express";
import GetFacilities from "./frontRouting/getFacilities";
import PostFacilities from "./frontRouting/postFacilities";
import validateFacilitiesPostParam from "./validate/validatePostParam";
import validateFacilitiesQuery from "./validate/validateQuery";

const facilities = express.Router();

facilities.get("/", validateFacilitiesQuery, GetFacilities);

facilities.post("/", validateFacilitiesPostParam, PostFacilities);

export default facilities;
