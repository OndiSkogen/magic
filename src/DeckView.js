import React from 'react';
//import { List, Table, Image } from "semantic-ui-react";


const DeckView = (props) => {
    console.log(props.card.card, "props.card");
    // let tmpMain = [];
    // let tmpSide = [];
    // let mainDeckForView = [];
    // let sideboardForView = [];    

    // const buildDeck = () => {
    //     let index;
    //     let tmpDeck = [];

    //     for (let i = 0; i < props.deckList.length; i++) {
    //         if (props.deckList[i].name === "") {
    //             index = i;
    //             break;
    //         }
    //         tmpMain.push(props.deckList[i]);
    //     }
    //     for (let i = index + 1; i < props.deckList.length; i++) {
    //         tmpSide.push(props.deckList[i]);
    //     }
    //     for (let card of tmpMain) {
    //         fetch('https://api.magicthegathering.io/v1/cards/?name="' + card.name + '"&?contains=imageUrl').then(res => res.json()).then(result => {
    //             let tmpId = result.cards[0].multiverseid ? result.cards[0].multiverseid : result.cards[1].multiverseid;
    //             console.log(tmpId, "tmpId");
    //             if (tmpId !== null) {
    //                 for (let i = 0; i < card.number; i++) {
    //                     fetch('https://api.magicthegathering.io/v1/cards/' + tmpId).then(res => res.json()).then(result => {
    //                         console.log(result, "result");
    //                         tmpDeck.push(result);
    //                     });
    //                 }
    //             }                
    //         });

    //     }
    //     for (let card of tmpSide) {
    //         fetch('https://api.magicthegathering.io/v1/cards/?name="' + card.name + '"').then(res => res.json()).then(result => {
    //             let tmpCard = result.cards[0];
    //             for (let i = 0; i < card.number; i++) {
    //                 sideboardForView.push(tmpCard);
    //             }
    //         });
    //     }
    //     mainDeckForView = tmpDeck;
    //     console.log(mainDeckForView, "maindeck");

    // }
    // buildDeck();

    return (
        <div className="main-container">
                <div className="grid-container">
                        <div className="grid-item"><img src={props.card.card.imageUrl} alt={props.card.card.name} height="245" width="175" /><br /><p className="card-name">{props.card.card.name}</p>{props.card.card.text}</div>                    
                </div>
            </div>
        // <div>
        //     <h3>Deck View</h3>
        //     <ul>
        //         {props.deckList.map(d =>
        //             <li key={d.cards[0].id}>{d.cards[0].name}</li>)}
        //     </ul>
        // </div>
    );
}
export default DeckView