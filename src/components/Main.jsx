
import { artistArray } from "../assets/database/artista2";
import ItemList from "../components/ItemList";
import{songsArray}from "../assets/database/songs2";



const Main = ({type}) => {
  return (
    <div className="main">
    {type ==="artists" || type=== undefined ?(
    <ItemList 
    title ="Artistas" items={5}
     itemsArray={artistArray}
      path="/artists" idPath="/artist"/>
     ):<></>}

  {type ==="songs" || type=== undefined ? (
    <ItemList 
     title ="Músicas" items={10} 
     itemsArray={songsArray} path="/songs" 
     idPath="/song"/>
      ):<></>}

       </div>


   
  );
};

export default Main