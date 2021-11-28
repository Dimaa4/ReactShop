import Card from "../../components/Card/Card";
import React from "react";
import { ShopContext } from "../../App";
const Home = ({
    addItemToCart,
    onChangeInputSearch,
    searchValue,
    clearInputSearch,
    removeItemLiked,
    removeItemCart,
    addItemToLiked,
    loading}) =>{
    const state = React.useContext(ShopContext);
    return(
        <div className="content">
          <div className="contentHeader">
            <h1>{ searchValue ?  `Search by: "${searchValue}"` : 'All products'}</h1>
              <div className="search">
              <input onChange={onChangeInputSearch} type="text" value={searchValue} placeholder="Search..." className="searchInput"/>
              {searchValue && <img alt="clear search" className="clearSearchInput" onClick={clearInputSearch}  src="img/x-lg.svg"/>} 
              </div>
          </div>
          <div className="cards">

            {
              loading ?
                <>
                  <Card loading />
                  <Card loading />
                  <Card loading />
                  <Card loading />
                  <Card loading />
                  <Card loading />
                  <Card loading />
                  <Card loading />
                  
                </>
              
              :
                state.items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item)=>{
                  let addedToCart = false;
                  let liked =false;
                  if(state.cartItems.some((i)=>i.name===item.name)){
                    addedToCart = true;
                  }
                  
                  if(state.cardLikedItems.some((i)=>i.name===item.name)){
                    liked = true;
                  }
                  return(<Card addItemToLiked = {addItemToLiked} removeItemLiked={removeItemLiked} 
                    addItemToCart={addItemToCart} removeItemCart={removeItemCart} item = {item}  
                     {...item} liked={liked} addedToCart={addedToCart} key={item.id} />);
                })
              }
            
            

          </div>


        </div>
    )
}
export default Home;