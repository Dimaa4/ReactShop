import React from "react";
import "./Drawer.scss";
const Drawer = ({removeItemCart, onClickClose, cartItems =[]})=>{
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
    
    return(

        <div className="overlay" tabIndex="0" onClick={clickOverlay} onKeyDown={onKeyDownEsc} >
            <div className="drawer">
                <div className="items">
                <div className="h1AndX"><h1>Cart:</h1>
                    <img alt="closeCart" onClick={onClickClose}  src="img/x-lg.svg"/>
                </div>
                <hr/>

                {cartItems.map((item)=>{
                    
                    return(
                        <div className="cartItem">
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
                })}
                
                
            </div>
            <div className="drawerBottom">
                <div><span>Total </span><div className="dash"/> <span> 410$</span></div>
                <div><span>Bills 5% </span><div className="dash"/> <span >10$</span></div>
                <button className="toOrder">To order <img src="img/arrow-right-short.svg" alt="button"/></button>
            </div>

            </div>
      </div>
    );
};
export default Drawer;