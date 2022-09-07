import React from 'react';
import './ShopItem.css';

function ShopItem({name, price, color, img}){
    
    return (
        <div className='card-item'>
      <img src={img} alt={name} />
      <h2 className='item-title'>{name}</h2>
      <p className='card-color'>{color}</p>
      <p className='price'>${price}.00</p>
      <button className='item-button'>add to card</button>
    </div>
    )
}
export default ShopItem;