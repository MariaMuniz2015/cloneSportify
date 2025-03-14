import { MongoClient } from "mongodb";

//const URI =
//coneção mongodb com senha

const client = new MongoClient(URI);

export const db = client.db("Spotify");
//const artistCollection = await db.collection("artists").find({}).toArray();
//console.log(artistCollection);
