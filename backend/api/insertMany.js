import { artistArray } from "../../frontend/src/assets/database/artista2.js";

import { songsArray } from "../../frontend/src/assets/database/songs2.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id; ////id será criado pelo mongodb
  return newArtistObj;
});

//console.log(newArtistArray);

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;
  return newSongObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

//console.log(responseSongs);
//console.log(responseArtists);
