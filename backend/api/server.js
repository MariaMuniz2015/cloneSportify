import express from "express";
import { db } from "./connect.js";

//const cors = require("cors");

const app = express();
const PORT = 3001;

app.get("/", (request, response) => {
  response.send("ola mundo agora neste momento");
});
app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
  console.log(artists);
});
app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
  console.log(songs);
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
