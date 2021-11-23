import React from "react";
import "./Drawer.scss";
const Drawer = ({ onClickClose,removeItemCart, cartItems =[]})=>{
    
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
                    <div key={item.id} className="cartItem">
                        <div className="imgAndName">
                            <img className="cartItemImg" src={item.img} alt={item.name}/>
                            <div>
                            <p>{item.name}</p>
                            <h4>{item.price}</h4>
                            </div>
                        </div>
                        <img onClick={()=>{removeItemCart(item)}} className="remove" src="img/remove.svg"  alt="Remove"/>
                    </div> 
                )
            }
            ) : 
            (
                    <div class = "emptyCart">
                        <img  alt = "Empty Cart" src="./img/emptyCart.svg"></img>
                        <h1>Your cart is empty!</h1>
                        <h3>Add at least one product to place an order</h3>
                        <button className="toOrder" onClick={onClickClose}><img className="imgLeft" src="img/arrow-left.svg" alt="button"/><span>Go shopping! </span></button>
                    </div>
            )

    }
        
        
    </div>
    {cartItems.length !== 0 && (
        <div className="drawerBottom">
        <div><span>Total </span><div className="dash"/> <span> {sumOfCart}$</span></div>
        <div><span>Bills 5% </span><div className="dash"/> <span >10$</span></div>
        <button className="toOrder"><span>To order </span> <img className="imgRight" src="img/arrow-right.svg" alt="button"/></button>
    </div>

    ) }
    </div>
</div>);
};
export default Drawer;