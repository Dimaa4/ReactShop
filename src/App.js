import React from 'react';
import './App.scss';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import axios from "axios";
import { Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import Favorites from './pages/Favorites/Favorites';

function App() {
  const [isCartOpen, setCartOpen]= React.useState(false);
  const [cartItems, setCartItems]= React.useState([]);
  const [cardLikedItems, setCardLikedItems] =React.useState([]);
  const [items, setItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(()=>{
      async function fetchRequests (){
        const cartRequest = await axios.get("https://619ce80668ebaa001753cd8d.mockapi.io/cart");
        const favoritesRequest = await axios.get("https://619ce80668ebaa001753cd8d.mockapi.io/liked");
        const products = await axios.get("https://619ce80668ebaa001753cd8d.mockapi.io/items");
        setCartItems(cartRequest.data);
        setCardLikedItems(favoritesRequest.data);
        setItems(products.data);
        setIsLoading(false);
        
      }
      fetchRequests();
     
  }, [])
  if(isCartOpen){
    window.scrollTo(0, 0);
    document.querySelector("body").style.overflow = "hidden";
  }
  else{
    document.querySelector("body").style.overflow = "auto"
  }
  
  function addItemToCart(item){
    try{
      if(cartItems.find((cartItem) => Number(cartItem.id) === Number(item.id))){
        
        setCartItems(prev => prev.filter(i => Number(i.id) !== Number(item.id)));
        axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/cart/${item.id}`)
      }
      else{
        setCartItems(prev => [...prev, item]);
        axios.post("https://619ce80668ebaa001753cd8d.mockapi.io/cart", item)
      }
    } catch(error){
      alert("ERROR")
    }
  }
  function removeItemCart(item){
    setCartItems(prev => prev.filter(i => i.id !== item.id));
    axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/cart/${item.id}`)
  }
  const addItemToLiked = async (item) => {
    try{
      if(cardLikedItems.find((favItem) => favItem.id === item.id)){
        axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/liked/${item.id}`)
        setCardLikedItems(prev => prev.filter(i => i.id !== item.id));
        
      } else {
        const {data} = await axios.post("https://619ce80668ebaa001753cd8d.mockapi.io/liked", item);
        setCardLikedItems(prev => [...prev, data]);
      }
    } catch(error){
        alert("ERROR")
    }
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
        
        <Route path ="/" exact> 
          <Home  items = {items} addItemToCart={addItemToCart}
          onChangeInputSearch ={onChangeInputSearch} searchValue={searchValue}
          clearInputSearch ={clearInputSearch}  
          removeItemCart={removeItemCart} addItemToLiked={addItemToLiked} 
          cardLikedItems= {cardLikedItems} cartItems={cartItems} loading = {isLoading}
          /> 
        </Route>
        <Route path ="/favorites"> <Favorites items={cardLikedItems}
    addItemToCart={addItemToCart}
    
    removeItemCart={removeItemCart}
    addItemToLiked={addItemToLiked}
    cartItems ={cartItems}/> </Route>
        
        
          
        
        
      </div>
    </div>
  );
}


export default App;
