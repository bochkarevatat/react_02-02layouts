// import React from 'react';
import './ShopCard.css';

function ShopCard({name, price, color, img}){
    
    return (
        <div className='card'>
            <h2 className='title'>{name}</h2>
            <div className='card-color'>{color}</div>
            <img src={img} alt={name} />
            <div className='card-price-button'>
        <p className='card-price'>${price}</p>
        <button className='card-button'>add to cart</button>
      </div>
        </div>
    )
}
export default ShopCard;