import React from "react";
import Card from "../../components/Card/Card";
import {ShopContext} from "../../App";

const Favorites = ({  
    addItemToCart,
    removeItemLiked,
    removeItemCart,
    addItemToLiked}) =>{
    const state = React.useContext(ShopContext);
    return(

        <div className="content">
          <div className="contentHeader">
            <h1>Your favorites</h1>
          </div>
          <div className="cards">

            {state.cardLikedItems.map((item)=>{
              item.prId = item.productId;
              return(<Card addItemToLiked = {addItemToLiked} removeItemLiked={removeItemLiked} 
                addItemToCart={addItemToCart} removeItemCart={removeItemCart} item = {item}   
                {...item} key={item.id} />);
            })}
            

          </div>


        </div>
    )
}
export default Favorites;