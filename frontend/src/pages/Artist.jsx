//import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons"
import SongList from "../components/SongList";
import { Link,useParams } from "react-router-dom";
import {artistArray} from "../assets/database/artista2"
import {songsArray} from "../assets/database/songs2"

const Artist = () => {
const {id}=useParams();

const artistObj= artistArray.filter(
 (currentArtistObj) => currentArtistObj._id ===id
)[0];

const songsArrayFromArtist = songsArray.filter(
  (currentSongObj) => currentSongObj.artist === artistObj.name
 );

/// console.log(songsArrayFromArtist);


const randomIndex  = Math.floor(Math.random()*(songsArrayFromArtist.length-1));
const randomIdArtist=songsArrayFromArtist[randomIndex]._id;

  return <div className="artist">
  <div className="artist__header"
  style={{
    backgroundImage:`linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj.banner})`,}}>
  
    <h2 className="artist__title">{artistObj.name}</h2>
     </div>

<div className="artist__body">
  <h2>Populares</h2>
<SongList songsArray={songsArrayFromArtist}/>
</div>
 
   <Link to={`/song/${randomIdArtist}`}><FontAwesomeIcon className="sigle-item__icon sigle-item__icon--artist" icon={faCirclePlay} />
   </Link>
    </div>;
};

export default Artist;
