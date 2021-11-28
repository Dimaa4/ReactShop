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
                let addedToCart = false;
                if(state.cartItems.some((i)=>+i.name===item.name)){
                    addedToCart = true;
                  }
              return(<Card addItemToLiked = {addItemToLiked} removeItemLiked={removeItemLiked} 
                addItemToCart={addItemToCart} removeItemCart={removeItemCart} item = {item}   
                {...item} key={item.id} liked={true} addedToCart={addedToCart}/>);
            })}
            

          </div>


        </div>
    )
}
export default Favorites;