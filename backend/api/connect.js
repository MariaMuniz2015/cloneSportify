import { MongoClient } from "mongodb";

const client = new MongoClient(URI);

export const db = client.db("Spotify");
//const artistCollection = await db.collection("artists").find({}).toArray();
//console.log(artistCollection);
