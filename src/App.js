
import './App.scss';

function App() {
  return (

    <div>
      <div className="overlay">
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
      <div className="conteiner">
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
        <hr />
        <div className="content">
          <div className="contentHeader">
            <h1>All goods</h1>
              <input type="text" placeholder="Search..." className="searchInput"></input>
          </div>




          


          <div className="cards">

            <div className="card">
              <img className="likeSvg" src="img/heart.svg" alt="like"/> <br/>
              <img className="goodImg" src="img/goods/sneakers.jpg" alt="product"/> <br/>
              <div className="m-l-15">
                <h3 className="goodName">Sneakers</h3>
                <div className="priceAndPlus">
                  <div>
                    <p className="price">Price:</p> 
                    <h4>200$</h4>
                  </div>
                  <img src="img/plus.svg" className="plusSvg" alt="addToCart"></img>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="likeSvg" src="img/heart.svg" alt="like"/> <br/>
              <img className="goodImg" src="img/goods/sneakers.jpg" alt="product"/> <br/>
              <div className="m-l-15">
                <h3 className="goodName">Sneakers</h3>
                <div className="priceAndPlus">
                  <div>
                    <p className="price">Price:</p> 
                    <h4>200$</h4>
                  </div>
                  <img src="img/plus.svg" className="plusSvg" alt="addToCart"></img>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="likeSvg" src="img/heart.svg" alt="like"/> <br/>
              <img className="goodImg" src="img/goods/sneakers.jpg" alt="product"/> <br/>
              <div className="m-l-15">
                <h3 className="goodName">Sneakers</h3>
                <div className="priceAndPlus">
                  <div>
                    <p className="price">Price:</p> 
                    <h4>200$</h4>
                  </div>
                  <img src="img/plus.svg" className="plusSvg" alt="addToCart"></img>
                </div>
              </div>
            </div>
            <div className="card">
              <img className="likeSvg" src="img/heart.svg" alt="like"/> <br/>
              <img className="goodImg" src="img/goods/sneakers.jpg" alt="product"/> <br/>
              <div className="m-l-15">
                <h3 className="goodName">Sneakers</h3>
                <div className="priceAndPlus">
                  <div>
                    <p className="price">Price:</p> 
                    <h4>200$</h4>
                  </div>
                  <img src="img/plus.svg" className="plusSvg" alt="addToCart"></img>
                </div>
              </div>
            </div>
            



          





          </div>


        </div>
      </div>
    </div>
  );
}


export default App;
