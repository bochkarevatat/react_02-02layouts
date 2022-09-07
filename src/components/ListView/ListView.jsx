import React from 'react';
import ShopItem from '../ShopItem/ShopItem';
import './ListView.css';

function ListView({ items }) {
    return (
      <div className='items'>
      {items.map((el, i) => <ShopItem img={el.img} 
                                      name={el.name} 
                                      color={el.color} 
                                      price={el.price} 
                                      key={i}/>)}
    </div>
    );
  }

  export default ListView;