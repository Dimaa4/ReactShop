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
  React.useEffect(()=>{
    axios.get("https://619ce80668ebaa001753cd8d.mockapi.io/items")
    .then((response)=>{setItems(response.data)})
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
    
    
  }
  function removeItemCart(item){
    
    for(let i = 0; i < cartItems.length; i++){
      if(cartItems[i].id===item.id){
        let arr1 = cartItems;
        arr1.splice(i,1);
        setCartItems(arr1);
        
      }
    }
  }
  return (
    
    <div>

      {isCartOpen ? <Drawer removeItemCart= {removeItemCart} cartItems = {cartItems} onClickClose = {()=>{setCartOpen(false)}}/> : null}
      
      <div className="conteiner">
        <Header onClickCart = {()=>{setCartOpen(true)}} />
        <hr />
        <div className="content">
          <div className="contentHeader">
            <h1>All products</h1>
              <input type="text" placeholder="Search..." className="searchInput"></input>
          </div>
          <div className="cards">

            {items.map((item)=>{
              
              return(<Card removeItemCart={removeItemCart} item = {item} addItemToCart={addItemToCart}  {...item} key={item.id}/>);
            })}
            

          </div>


        </div>
      </div>
    </div>
  );
}


export default App;
