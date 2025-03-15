import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();
const PORT = 3005;

app.use(cors());
//app.use(express.json());

app.get("/", (request, response) => {
  response.send("ola mundo agora neste momento");
});
app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
  // console.log(artists);
});
app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
  //console.log(songs);
});

app.listen(PORT, () => {
  console.log(`Servidor esta escutando na porta ${PORT}`);
});
