import React from "react";
import "./Drawer.scss";
const Drawer = ()=>{
    return(
        <div className="overlay" style={{display:"none"}}>
            <div className="drawer">
                <div className="items">
                <div className="h1AndX"><h1>Cart:</h1><img alt="closeCart" src="img/x-lg.svg"/></div>
                <hr/>

                
                <div className="cartItem">
                <div className="imgAndName">
                    <img className="cartItemImg" src="img/goods/sneakers.jpg" alt="product"/>
                    <div>
                    <p>Sneakers</p>
                    <h4>200$</h4>
                    </div>
                </div>
                <img className="remove" src="img/remove.svg"  alt="Remove"/>
                </div> 
                <div className="cartItem">
                <div className="imgAndName">
                    <img className="cartItemImg" src="img/goods/sneakers.jpg" alt="product"/>
                    <div>
                    <p>Sneakers</p>
                    <h4>200$</h4>
                    </div>
                </div>
                <img className="remove" src="img/remove.svg"  alt="Remove"/>
                </div> 
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