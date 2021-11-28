import React from "react";
import Info from "../Info";
import "./Drawer.scss";
import { ShopContext } from "../../App";
import axios from "axios";

const CartItem = ({item, removeItemCart})=>{
    return(<div  className="cartItem">
    <div className="imgAndName">
        <img className="cartItemImg" src={item.img} alt={item.name}/>
        <div>
        <p>{item.name}</p>
        <h4>{item.price}</h4>
        </div>
    </div>
    <img onClick={()=>{removeItemCart(item)}} className="remove" src="img/remove.svg"  alt="Remove"/>
</div> )
}

const Drawer = ({ onClickClose,removeItemCart})=>{
    
    const [isOrderComplete, setOrderComplete] = React.useState(false);
    const {cartItems, setCartItems} = React.useContext(ShopContext);
    const [orderId, setOrderId]= React.useState(null);
    const [isLoadingOrder, setLoadingOrder] = React.useState(false);
    function onKeyDownEsc(e){
        console.log(e);
        if(e.code === "Escape"){
            onClickClose();
        }
    }
    function clickOverlay(e){
        let overlay = document.querySelector(".overlay")
        if(e.target === overlay){
            onClickClose();
        }
    }
    function sumOfCart(){
        alert (cartItems.reduce((item, sum)=>item.price+sum));
        return cartItems.reduce((item, sum)=>item.price+sum);
        
    }
    const onOrder = async ()=>{
        try{
            setLoadingOrder(true);
            const {data} = await axios.post("https://619ce80668ebaa001753cd8d.mockapi.io/orders", {items: cartItems,})
            setOrderId(data.id);
            cartItems.forEach((i)=>{
                axios.delete(`https://619ce80668ebaa001753cd8d.mockapi.io/cart/${i.id}`)
            });
            setCartItems([]);
            setOrderComplete(true);
            
        }
        catch(error){
            alert("ERROR");
        }
        setLoadingOrder(false);
    }
    return(<div className="overlay" tabIndex="0" onClick={clickOverlay} onKeyDown={onKeyDownEsc} >
    <div className="drawer">
            <div className="items">
            <div className="h1AndX"><h1>Cart:</h1>
                <img alt="closeCart" onClick={onClickClose}  src="img/x-lg.svg"/>
            </div>
            <hr/>

            { cartItems.length !==0 ?
            cartItems.map((item)=>{
                
                return(
                    <CartItem removeItemCart = {removeItemCart} item = {item} key={item.id}/>
                )
            }
            ) : 
            (
                isOrderComplete ?
                    <Info title="Your order is complete!" description= {`Your order №${orderId}. Courier will arrive soon`}
                        img="./img/orderCompleted.svg" alt="Order completed" onClick={onClickClose}/>    
                    
                :
                    <Info title="Your cart is empty!" description="Add at least one product to place an order"
                        img="./img/emptyCart.svg" alt="Empty Cart" onClick={onClickClose}/>
                
            )

    }
        
        
    </div>
    {cartItems.length !== 0 && (
        <div className="drawerBottom">
        <div><span>Total </span><div className="dash"/> <span> {sumOfCart}$</span></div>
        <div><span>Bills 5% </span><div className="dash"/> <span >10$</span></div>
        <button disabled={isLoadingOrder} onClick={onOrder} className="toOrder"><span>To order </span> <img className="imgRight" src="img/arrow-right.svg" alt="button"/></button>
    </div>

    ) }
    </div>
</div>);
};
export default Drawer;