import express from "express";
import { DateTime } from "luxon";
import CardType from "../../../domain/attendanceManagement/src/valueObject/cardtype";
import { GetTimecardsRouter, PostTimecardRouter } from "../backRouting";
import ValidateTimecardsPostParam from "../validate/validatePostParam";
import ValidateTimecardsQuery from "../validate/validateQuery";

export default async function PostTimecards(
  req: express.Request,
  res: express.Response
) {
  let userId: string | undefined;
  let date: DateTime | undefined;
  let cardType: CardType | undefined;
  let latitude: number | undefined;
  let longitude: number | undefined;

  const request = req.body;
  
  if (typeof request.userId === "string") {
    userId = request.userId;
  }
  if (typeof request.date === "string") {
    date = DateTime.fromISO(request.date);
  }
  if (
    request.cardType === CardType.Attendance ||
    request.cardType === CardType.Leavework ||
    request.cardType === CardType.Takebreak ||
    request.cardType === CardType.Endbreak
  ) {
    cardType = request.cardType;
  }
  if (typeof request.latitude === "number") {
    latitude = request.latitude;
  }
  if (typeof request.longitude === "number") {
    longitude = request.longitude;
  }

  const postParam = new ValidateTimecardsPostParam(
    userId,
    cardType,
    date,
    latitude,
    longitude
  ).createWithValid();

  if (postParam) {
    const response = await PostTimecardRouter(postParam);
    res.json(response);
  }
}
