import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../App";
import "./Header.scss"
const Header =(props)=>{
    const {cartItems} = React.useContext(ShopContext);
    const sumOfCart = cartItems.reduce((sum, obj)=>sum+obj.price,0)
    return(
        <header>
          <Link to="/ReactShop/">
            <div className="headerLeft">
              <img src="https://dimaa4.github.io/ReactShop/img/logoShop.svg" className="logo" alt="logo"/>
              <div className="headerInfo">
              {props.clientWidth > 500 && 
              <>  
                <h2>React Shop</h2>
                <p>Shop of the best products</p>
              </>
              }
              </div>
            </div>
          </Link>
          
          <ul className="headerRight">
            <li className="sumOfMoney" onClick={props.onClickCart}>
              <img src="https://dimaa4.github.io/ReactShop/img/cart.svg" className="svgRight" alt="cart"/>
              <h3>{sumOfCart}$</h3> 
            </li>
            <li><Link to="/favorites/"><img src="https://dimaa4.github.io/ReactShop/img/heart.svg" className="svgRight svgHeart" alt="account"/></Link></li>
            <li><Link to="/orders/"><img src="https://dimaa4.github.io/ReactShop/img/account.svg" className="svgRight svgAccount" alt="account"/></Link></li>
            
          </ul>
          
        </header>
    )
}
export default Header;