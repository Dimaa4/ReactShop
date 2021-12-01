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
              {searchValue && <img alt="clear search" className="clearSearchInput" onClick={clearInputSearch}  src="https://dimaa4.github.io/ReactShop/img/x-lg.svg"/>} 
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
                  item.prId = item.id;
                  return(<Card addItemToLiked = {addItemToLiked} removeItemLiked={removeItemLiked} 
                    addItemToCart={addItemToCart} removeItemCart={removeItemCart} item = {item}  
                     {...item}  key={item.id} />);
                })
              }
            
            

          </div>


        </div>
    )
}
export default Home;