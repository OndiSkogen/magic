import React from 'react';
//import { List, Table, Image } from "semantic-ui-react";

const DeckView = (props) => {
    let tmpMain = [];
    let tmpSide = [];
    let mainDeckForView = [];
    let sideboardForView = [];

    const buildDeck = () => {
        let index;
             
        for (let i = 0; i < props.deckList.length; i++) {
            if (props.deckList[i].name === "") {
                index = i;
                break;
            }
            tmpMain.push(props.deckList[i]);
        }
        for (let i = index + 1; i < props.deckList.length; i++) {
            tmpSide.push(props.deckList[i]);
        }
        for (let card of tmpMain) {
            fetch('https://api.magicthegathering.io/v1/cards/?name="' + card.name + '"&?contains="imageUrl"').then(res => res.json()).then(result => {
                let tmpId = result.cards[0].multiverseid ? result.cards[0].multiverseid : null;
                for (let i = 0; i < card.number; i++) {
                    fetch('https://api.magicthegathering.io/v1/cards/' + tmpId).then(res => res.json()).then(result => {
                        console.log(result, "result");
                        mainDeckForView.push(result);
                    });
                }
            });

        }
        for (let card of tmpSide) {
            fetch('https://api.magicthegathering.io/v1/cards/?name="' + card.name + '"').then(res => res.json()).then(result => {
                let tmpCard = result.cards[0];
                for (let i = 0; i < card.number; i++) {
                    sideboardForView.push(tmpCard);
                }
            });
        }
        console.log(mainDeckForView, "maindeck");
    }
    buildDeck()
    return (

        <div>
            
            <h3>Deck View</h3>
            <ul>
                {mainDeckForView.map(card => 
                <li key={card.id}>{card.name}</li>)}
            </ul>
        </div>
    );
}
export default DeckView