import Express from "express";
const app = Express();

app.get("/", (req, res) => {
  res.send({ message: "pong" });
})

app.listen(8888, "localhost", () => {
  console.log("Runnig");
})