import express from 'express'
const timecards = express();

timecards.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello Express!");
});
timecards.put("/", (req: express.Request, res: express.Response) => {
  res.send("Hello ExpressPUT!");
});
timecards.get("/:id", (req: express.Request, res: express.Response) => {
  res.send(req.params.id);
});

export default timecards;
