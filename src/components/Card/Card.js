
import React from "react";
import"./Card.scss"



const Card = (props)=>{
  let [isAdded, setAdded] = React.useState(false);
  let onClickAdd= ()=>{
    setAdded(!isAdded);
    if(!isAdded){
      
      props.addItemToCart(props.item);
    }
    else{
      props.removeItemCart(props.item);
      
    }

  };
    return(
      <div className="card">
      <img className="likeSvg" src="img/heart.svg" alt="like"/> <br/>
      <img className="goodImg" src={props.img} alt={props.name}/> <br/>
      <div className="m-l-15">
        <h3 className="goodName">{props.name}</h3>
        <div className="priceAndPlus">
          <div>
            <p className="price">Price:</p> 
            <h4>{props.price}$</h4>
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