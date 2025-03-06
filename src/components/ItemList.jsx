

import { Link } from "react-router-dom";
import "../index.css";

import SingleItem from "./SingleItem";



const ItemList = ({title,items,itemsArray,path,idPath}) => {
  return (
    <div>  
      <div className="item-list">
    <div className="item-list__header">


  <h2>{title} mais populares</h2>
  <Link to={path} className="item-list__link">
  Mostrar tudo
  </Link>
  </div>
  </div>
  <div className="item-list__container">   


{itemsArray
.filter((currentValue, index)=> index<items)
.map((currObj, index)=>(
<SingleItem
idPath={idPath}
{...currObj}
key = {`${title}-${index}`}/>))}
 


    
 
      </div>
      </div>
  )
}

export default ItemList
