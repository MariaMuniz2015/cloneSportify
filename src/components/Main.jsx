
import { artistArray } from "../assets/database/artista2";
import ItemList from "../components/ItemList";
import{songsArray}from "../assets/database/songs2";



const Main = () => {
  return (
    <div className="main">
    
    <ItemList title ="Artistas" items={5} itemsArray={artistArray} path="/artists" idPath="/artist"/>
    <ItemList  title ="Músicas" items={10} itemsArray={songsArray} path="/songs" idPath="/song"/>
       </div>


   
  );
};

export default Main