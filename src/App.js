import React from 'react';
import './App.scss';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import axios from "axios";




function App() {
  const [isCartOpen, setCartOpen]= React.useState(false);
  const [cartItems, setCartItems]= React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(()=>{
    axios.get("https://619ce80668ebaa001753cd8d.mockapi.io/items")
    .then(response=>setItems(response.data))
    axios.get("https://619ce80668ebaa001753cd8d.mockapi.io/cart")
    .then(response=>setCartItems(response.data))
  }, [])
  if(isCartOpen){
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow = "hidden";
  }
  else{
    document.querySelector("body").style.overflow = "auto"
  }
  
  function addItemToCart(item){
    setCartItems(prev => [...prev, item]);
    axios.post("https://619ce80668ebaa001753cd8d.mockapi.io/cart", item)
    
  }
  function removeItemCart(item){
    setCartItems(prev => prev.filter(i => i.id !== item.id));
    axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/cart/${item.id}`)
  }
  function onChangeInputSearch(event){
    setSearchValue (event.target.value); 
  }
  function clearInputSearch(){
    setSearchValue("");
    
  }
  return (
    
    <div>

      {isCartOpen ? <Drawer removeItemCart= {removeItemCart} cartItems = {cartItems} onClickClose = {()=>{setCartOpen(false)}}/> : null}
      
      <div className="conteiner">
        <Header onClickCart = {()=>{setCartOpen(true)}} />
        <hr />
        <div className="content">
          <div className="contentHeader">
            <h1>{ searchValue ?  `Search by: "${searchValue}"` : 'All products'}</h1>
              <div className="search">
              <input onChange={onChangeInputSearch} type="text" value={searchValue} placeholder="Search..." className="searchInput"/>
              {searchValue && <img alt="clear search" className="clearSearchInput" onClick={clearInputSearch}  src="img/x-lg.svg"/>} 
              </div>
          </div>
          <div className="cards">

            {items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item)=>{
              
              return(<Card removeItemCart={removeItemCart} item = {item} addItemToCart={addItemToCart}  {...item} key={item.id}/>);
            })}
            

          </div>


        </div>
      </div>
    </div>
  );
}


export default App;
