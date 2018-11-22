import * as React from 'react';

const CardView = (props) => {
    return (
        <div className="main-container">
            <div className="grid-container-card">
                {props.cards.map(card =>
                    <div className="grid-item" key={card.id} >
                        <p className="card-name">{card.name}</p>
                        <img src={card.imageUrl ? card.imageUrl : "./Magic_card_back.jpg"} alt={card.name} height="245" width="175" /><br />
                        <p className="card-name">{card.type}</p>
                        <p>{card.text}</p>
                        {card.power ? <p>Power/Toughness: {card.power}/{card.toughness}</p> : null}
                        {card.loyalty ? <p>Loyalty: {card.loyalty}</p> : null}
                        <p>{card.setName}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
export default CardView;