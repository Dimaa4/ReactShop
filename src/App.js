import React from 'react';
import './App.scss';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import axios from "axios";
import { Route} from 'react-router-dom';
import Home from './pages/Home/Home'
import { Orders } from './pages/Orders/Orders';
import Favorites from './pages/Favorites/Favorites';
export const ShopContext = React.createContext({});
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
     
  }, []);

  
  
  async function addItemToCart(item){
    try{
      const findItem = cartItems.find(i=>Number(item.id)=== i.productId)
      if(findItem){
        
        setCartItems(prev => prev.filter(i => Number(i.productId) !== Number(item.id)));
        axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/cart/${findItem.id}`)
      }
      else{
        item.productId = item.id;
        setCartItems((prev) => [...prev, item]);
        
        const {data} = await axios.post("https://619ce80668ebaa001753cd8d.mockapi.io/cart", 
        {name: item.name, price: item.price, img: item.img, productId: item.id})
        console.log(cartItems);
        setCartItems(prev => prev.map((i)=>{
          if (i.productId === data.productId){
            return{
              ...i,
              id:data.id
            }
          }
          return i;
        }));
        console.log(cartItems);
      }
    } catch(error){
      alert("ERROR")
    }
  }
  const addItemToLiked = async (item) => {
    const findItem = cardLikedItems.find(i=>Number(item.prId)=== Number(i.productId))
    try{
      if(findItem){
        
        setCardLikedItems(prev => prev.filter(i => Number(i.productId) !== Number(item.prId)));
        axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/liked/${findItem.id}`)
        console.log(cardLikedItems)
        
      } else {
        item.productId = item.prId;
        setCardLikedItems((prev) => [...prev, item]);
        const {data} = await axios.post("https://619ce80668ebaa001753cd8d.mockapi.io/liked", 
        {name: item.name, price: item.price, img: item.img, productId: item.id});
        setCardLikedItems(prev => prev.map((i)=>{
          if (i.productId === data.productId){
            return{
              ...i,
              id:data.id
            }
          }
          return i;
        }))
      }
    } catch(error){
        alert("ERROR")
    }
  }
  function removeItemCart(item){
    setCartItems(prev => prev.filter(i => Number(i.id) !== Number(item.id)));
    axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/cart/${item.id}`)
  }
  
  
  function onChangeInputSearch(event){
    setSearchValue (event.target.value); 
  }
  function clearInputSearch(){
    setSearchValue("");
    
  }
  const clientWidth = document.documentElement.clientWidth;
  
  return (
    
    <ShopContext.Provider value = {{items,cartItems, cardLikedItems, setCartItems}} >
      <div>

        <Drawer isCartOpen={isCartOpen} removeItemCart= {removeItemCart} onClickClose = {()=>{setCartOpen(false)}}/>

        <div className="conteiner">
          
          <Header onClickCart = {()=>{setCartOpen(true)}} clientWidth={clientWidth} />
          <hr />
          
          <Route path ="/ReactShop/" exact> 
            <Home  items = {items} addItemToCart={addItemToCart}
            onChangeInputSearch ={onChangeInputSearch} searchValue={searchValue}
            clearInputSearch ={clearInputSearch}  
            removeItemCart={removeItemCart} addItemToLiked={addItemToLiked} 
            cardLikedItems= {cardLikedItems} cartItems={cartItems} loading = {isLoading}
            /> 
          </Route>
          <Route path ="/favorites/"> <Favorites 
        addItemToCart={addItemToCart}
        removeItemCart={removeItemCart}
        addItemToLiked={addItemToLiked}
        cartItems ={cartItems}/> </Route>
          <Route path ="/orders/"> 
            <Orders
            addItemToCart={addItemToCart}
            removeItemCart={removeItemCart}
            addItemToLiked={addItemToLiked}/> 
          </Route>
          
            
          
          
        </div>
      </div>
    </ShopContext.Provider>
  );
}


export default App;
