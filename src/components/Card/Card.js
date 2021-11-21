import React from "react";
import"./Card.scss"
const Card = ()=>{
    return(
        <div className="card">
              <img className="likeSvg" src="img/heart.svg" alt="like"/> <br/>
              <img className="goodImg" src="img/goods/sneakers.jpg" alt="product"/> <br/>
              <div className="m-l-15">
                <h3 className="goodName">Sneakers</h3>
                <div className="priceAndPlus">
                  <div>
                    <p className="price">Price:</p> 
                    <h4>200$</h4>
                  </div>
                  <img src="img/plus.svg" className="plusSvg" alt="addToCart"></img>
                </div>
              </div>
            </div>
    )
}
export default Card;