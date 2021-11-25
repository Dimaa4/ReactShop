import Card from "../../components/Card/Card";
const Favorites = ({items,
    addItemToCart,
    removeItemLiked,
    removeItemCart,
    addItemToLiked,
    cartItems}) =>{
    return(
        <div className="content">
          <div className="contentHeader">
            <h1>Your favorites</h1>
          </div>
          <div className="cards">

            {items.map((item)=>{
                let addedToCart = false;
                if(cartItems.some((i)=>+i.name===item.name)){
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