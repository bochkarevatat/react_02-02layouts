import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import './CardsView.css';

function CardsView({cards}){

    return (
        <div className='cards'>
            {cards.map((card) => (
        <ShopCard key={card.id} card={card.data}/>
        ))}
        </div>
    )
}
export default CardsView;