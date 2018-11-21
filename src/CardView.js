import * as React from 'react';

const CardView = (props) => {
    return (
            <div className="main-container">
                <div className="grid-container">
                    {props.cards.map(card =>
                        <div className="grid-item" key={card.id} ><img src={card.imageUrl ? card.imageUrl : "./Magic_card_back.jpg"} alt={card.name} height="245" width="175" /><br /><p className="card-name">{card.name}</p>{card.text}</div>
                    )}
                </div>
            </div>
    );
}
export default CardView;