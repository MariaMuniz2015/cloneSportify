import React from 'react'
import { useState } from 'react';
import SongItems from "./SongItems"

const SongList = ({songsArray}) => {

const [items, setItems] = useState(5);

  return (
    <div className="song_list">
      {songsArray
      .filter((currentValue, index)=>index< items)
      .map((currentSongObj, index)=> (
        <SongItems {...currentSongObj}index={index} key={index}/>
      ))}
  
    <p className="song-list__see-more" onClick={()=> {
      setItems(items + 5)
      }}>Ver mais</p>
    </div>
  )
}

export default SongList