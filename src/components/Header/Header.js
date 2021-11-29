import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../App";
import "./Header.scss"
const Header =(props)=>{
    const {cartItems} = React.useContext(ShopContext);
    const sumOfCart = cartItems.reduce((sum, obj)=>sum+obj.price,0)
    return(
        <header>
          <Link to="/">
            <div className="headerLeft">
              <img src="img/logoShop.svg" className="logo" alt="logo"/>
              <div className="headerInfo">
                <h2>React Shop</h2>
                <p>Shop of the best products</p>
              </div>
            </div>
          </Link>
          
          <ul className="headerRight">
            <li className="sumOfMoney" onClick={props.onClickCart}>
              <img src="img/cart.svg" className="svgRight" alt="cart"/>
              <h3>{sumOfCart}$</h3> 
            </li>
            <li><Link to="/favorites"><img src="img/heart.svg" className="svgRight svgHeart" alt="account"/></Link></li>
            <li><Link to="/orders"><img src="img/account.svg" className="svgRight svgAccount" alt="account"/></Link></li>
            
          </ul>
          
        </header>
    )
}
export default Header;