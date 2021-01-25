import express from "express";
import DeleteFacilities from "./frontRouting/deleteFacilities";
import GetFacilities from "./frontRouting/getFacilities";
import PostFacilities from "./frontRouting/postFacilities";
import PutFacilities from "./frontRouting/putFacilities";
import validateFacilitiesDeleteParam from "./validate/validateDeleteParam";
import validateFacilitiesPostParam from "./validate/validatePostParam";
import validateFacilitiesPutParam from "./validate/validatePutParam";
import validateFacilitiesQuery from "./validate/validateQuery";

const facilities = express.Router();

facilities.get("/", validateFacilitiesQuery, GetFacilities);
facilities.post("/", validateFacilitiesPostParam, PostFacilities);
facilities.put("/:facilityId", validateFacilitiesPutParam, PutFacilities);
facilities.delete("/:facilityId", validateFacilitiesDeleteParam, DeleteFacilities);

export default facilities;
