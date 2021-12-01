import React from 'react'

const Info = ({title, description, img, alt, onClick}) => {
    return (
        
            <div className = "infoCart">
                    <img  alt = {alt} src={img}></img>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <button className="toOrder" onClick={onClick} ><img className="imgLeft" src="https://dimaa4.github.io/ReactShop/img/arrow-left.svg" alt="button"/><span>Go shopping! </span></button>
            </div>
        
    )
}
export default Info;