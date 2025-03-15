//import React from "react";
import { Link,useParams } from "react-router-dom";
import Player from "../components/Player";
import {songsArray} from "../assets/database/songs2"
import {artistArray} from "../assets/database/artista2"

const Song = () => {

  const {id} =useParams();

  const {image, name, duration, artist,audio} = songsArray.filter(
   (currentSongObj) => currentSongObj._id === id
  )[0];

  const artistObj= artistArray.filter(
   (currentArtistObj) => currentArtistObj.name === artist
  )[0];


const songsArrayFromArtist = songsArray.filter(
  (currentSongObj) => currentSongObj.artist === artist
 );

 const randomIndex  = Math.floor(
  Math.random()*(songsArrayFromArtist.length-1));


  const randomIndex2  = Math.floor(
    Math.random()*(songsArrayFromArtist.length-1));
  
  const randomIdFromArtist=songsArrayFromArtist[randomIndex]._id;
 const randomId2FromArtist=songsArrayFromArtist[randomIndex2]._id;

  return (
  <div>
  <div className="song__container">
  <div className="song__image-container">
    <img src={image} 
    alt={`imagem da musica${name}`}/>
    </div>
    </div>
  <div className="song__bar">

    <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
      <img 
      width={75}
      height={75}
      src={artistObj.image}
       alt={`imagem do artista ${artist}`}/>
    </Link>
    <Player duration={duration}  
    randomIdFromArtist={ randomIdFromArtist}
    randomId2FromArtist={randomId2FromArtist}/>

   
    <div className="">
      <p className="song__name ">{name}</p>
      <p>{artist}</p>
    </div>
 
  </div>
  </div>


  );
};

export default Song;
