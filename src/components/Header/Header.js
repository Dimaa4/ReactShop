import React from "react";
import "./Header.scss"
const Header =()=>{
    return(
        <header>
          <div className="headerLeft">
            <img src="img/logoShop.svg" className="logo" alt="logo"/>
            <div className="headerInfo">
              <h2>React Shop</h2>
              <p>Shop of the best goods</p>
            </div>
          </div>
          
          <ul className="headerRight">
            <li className="sumOfMoney"><img src="img/cart.svg" className="svgRight" alt="cart"/><h3>20$</h3> </li>
            <li><img src="img/account.svg" className="svgRight" alt="account"/></li>
          </ul>
          
        </header>
    )
}
export default Header;