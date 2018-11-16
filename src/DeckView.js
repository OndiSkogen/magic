import React from 'react';
import mtgsdk from 'mtgsdk';

const DeckView = (props) => {
    return (<div id="deck-view-container">
        <ul>
            {props.deckList.map(card => 
            mtgsdk.card.where({name: "'" + card.name + "'"}).then(results => {
                console.log(results);
            })
            )} 
        </ul>
    </div>);
}
export default DeckView

//<li key={card.name}>{card.number}x {card.name}</li><li key={card.name}>{card.number}x {card.name}</li>