import React from 'react';
import ShopItem from '../ShopItem/ShopItem';
import './ListView.css';

function ListView({ items }) {
    return (
      <div className={'ListView'}>
        {items.map((item) => (
          <ShopItem key={item.id} item={item.data} />
        ))}
      </div>
    );
  }

  export default ListView;