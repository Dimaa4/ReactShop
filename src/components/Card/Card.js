
import React from "react";
import"./Card.scss"



const Card = ({addItemToLiked, removeItemLiked, addItemToCart, removeItemCart, item, liked = false, addedToCart=false })=>{
  let [isAdded, setAdded] = React.useState(addedToCart);
  let [isLiked, setLiked] = React.useState(liked);
  let onClickAdd= ()=>{
    setAdded(!isAdded);
    if(!isAdded){
      addItemToCart(item);
    }
    else{
      removeItemCart(item);
    }
  };
  let onClickLike = ()=>{
    setLiked(!isLiked);
    addItemToLiked(item);
  }
    return(
      <div className="card">
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
          <img src={isAdded ? "./img/added.svg" : "./img/plus.svg"} 
          style={isAdded ? {opacity: 1, border:0}:{opacity: 0.4}} 
          className="plusSvg" alt="addToCart" onClick={onClickAdd}/>
        </div>
      </div>
    </div>
    )
}
export default Card;