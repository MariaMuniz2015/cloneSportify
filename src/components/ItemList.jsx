

import { Link, useLocation} from "react-router-dom";
import "../index.css";

import SingleItem from "./SingleItem";



const ItemList = ({title,items,itemsArray,path,idPath}) => {

  const  {pathname} = useLocation();
  const isHome = pathname === '/'
  const finalItems = isHome ? items : Infinity;

  return (
    <div>  
      <div className="item-list">
    <div className="item-list__header">


  <h2>{title} mais populares</h2>

{isHome ? (
  <Link to={path} className="item-list__link">
  Mostrar tudo
  </Link>
   ) : (<></>)}
  </div>
  </div>
  <div className="item-list__container">   


{itemsArray
.filter((currentValue, index)=> index<finalItems)
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
