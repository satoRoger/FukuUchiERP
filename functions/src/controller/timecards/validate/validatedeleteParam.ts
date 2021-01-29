import { check } from "express-validator";

const validateTimecardsDeleteParam = [check("userId").notEmpty()];

export default validateTimecardsDeleteParam;
