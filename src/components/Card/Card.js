
import React from "react";
import"./Card.scss"
import ContentLoader from "react-content-loader";
import { ShopContext } from "../../App";

const Card = ({addItemToLiked,  addItemToCart, item, liked = false, addedToCart=false, loading =false })=>{
  let [isLiked, setLiked] = React.useState(liked);
  let onClickAdd= ()=>{
    
    addItemToCart(item);
  };
  const {cartItems} = React.useContext(ShopContext);
  const isItemAdded = (name)=>{
    return cartItems.some(i=>name === i.name);
  };
  let onClickLike = ()=>{
    setLiked(!isLiked);
    addItemToLiked(item);
  };
  
    return(
      
      <div className="card">
      {loading ?
          <ContentLoader 
          speed={2}
          width={175}
          height={323}
          viewBox="0 0 175 323"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          
        >
          <rect x="0" y="0" rx="15" ry="15" width="175" height="175" /> 
          <rect x="0" y="190" rx="8" ry="8" width="175" height="25" /> 
          <rect x="0" y="227" rx="8" ry="8" width="120" height="25" /> 
          <rect x="0" y="279" rx="5" ry="5" width="80" height="30" /> 
          <rect x="135" y="276" rx="10" ry="10" width="33" height="33" />
        </ContentLoader>  
      :
        <>
        <img className="likeSvg" onClick={onClickLike} 
        src={isLiked ? "img/liked.svg" : "img/heart.svg"} alt="like"
        style={isLiked ? {opacity: 1, border:0}:{opacity: 0.4}}/> <br/>
        <img className="goodImg" src={item.img} alt={item.name}/> <br/>
        <div className="m-l-15">
          <h3 className="goodName">{item.name}</h3>
          <div className="priceAndPlus">
            <div>
              <p className="price">Price:</p> 
              <h4>{item.price}$</h4>
            </div>
            <img src={isItemAdded(item.name) ? "./img/added.svg" : "./img/plus.svg"} 
            style={isItemAdded(item.name) ? {opacity: 1, border:0}:{opacity: 0.4}} 
            className="plusSvg" alt="addToCart" onClick={onClickAdd}/>
          </div>
        </div>
        </>
      }
      
    </div>
    )
}
export default Card;