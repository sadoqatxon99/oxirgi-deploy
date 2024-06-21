import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.send("Serverdan Salom!");
});

app.get("/about", (req, res) => {
  res.json({
    name: "Sadoqat",
    surname: "Fazliddinova",
    age: 24,
  });
});

export const handler = serverless(app);
