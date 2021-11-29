
import React from "react";
import"./Card.scss"
import ContentLoader from "react-content-loader";
import { ShopContext } from "../../App";

const Card = ({addItemToLiked,  addItemToCart, item,  loading =false })=>{
  
  let onClickAdd= ()=>{
    
    addItemToCart(item);
  };
  const {cartItems,cardLikedItems} = React.useContext(ShopContext);
  const isItemAdded = (productId)=>{
    return cartItems.some(i=>Number(productId) === Number(i.productId));
  };
  const isItemLiked = (productId)=>{
    
    return cardLikedItems.some(i=>Number(productId) === Number(i.productId));
  };
  let onClickLike = ()=>{
    
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
        {addItemToLiked && 
        <img className="likeSvg" onClick={onClickLike} 
        src={isItemLiked(item.prId) ? "img/liked.svg" : "img/heart.svg"} alt="like"
        style={isItemLiked(item.prId) ? {opacity: 1, border:0}:{opacity: 0.4}}/>} <br/>
        <img className="goodImg" src={item.img} alt={item.name}/> <br/>
        <div className="m-l-15">
          <h3 className="goodName">{item.name}</h3>
          <div className="priceAndPlus">
            <div>
              <p className="price">Price:</p> 
              <h4>{item.price}$</h4>
            </div>
            {addItemToCart && 
            <img src={isItemAdded(item.id) ? "./img/added.svg" : "./img/plus.svg"} 
            style={isItemAdded(item.id) ? {opacity: 1, border:0}:{opacity: 0.4}} 
            className="plusSvg" alt="addToCart" onClick={onClickAdd}/>}
          </div>
        </div>
        </>
      }
      
    </div>
    )
}
export default Card;