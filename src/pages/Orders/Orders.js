import axios from "axios";
import React from "react";
import Card from "../../components/Card/Card";
export const Orders = ({  
    addItemToCart,
    removeItemLiked,
    removeItemCart,
    addItemToLiked})=>{
    const [orders, setOrders]=React.useState([])
    React.useEffect(()=>{
        (async()=>{
            try{
                const {data}=await axios.get("https://619ce80668ebaa001753cd8d.mockapi.io/orders")
            setOrders(data);
            }
            catch(error){
                console.log(error);
                alert("ERROR");
            }
            
        })()
    }, [])
    console.log(orders);
    return(
        <div className="content">
          <div className="contentHeader">
            <h1>Your orders: </h1>
          </div>
          <div>
            {orders.map(obj=>{
                return(
                <>
                    <div className="order">
                    <h2>Order №{obj.id} :</h2>
                    <div className="cards">
                    {obj.items.map((item)=>{
                        return(
                        <Card  item = {item}   
                        {...item} key={item.id}/>
                        )
                    })}
                    </div>
                    
                    </div>
                    <br/>
                </>)
            })}
            

          </div>


        </div>
    )
}