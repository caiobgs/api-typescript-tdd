import express, { response } from "express";

const app = express();

app.get("/", (req, res) => {
  return response.json({ hello: "osi" });
});

app.listen(3333);
