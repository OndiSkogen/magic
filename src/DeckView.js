import React from 'react';

const DeckView = (props) => {
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
            <div className="grid-container-deck-view">
                <div className="grid-item" key={props.card.card.id} >
                    <p className="card-name">{props.card.card.name}</p>
                    <img src={props.card.card.imageUrl ? props.card.card.imageUrl : "./Magic_card_back.jpg"} alt={props.card.card.name} height="245" width="175" /><br />
                    <p className="card-name">{props.card.card.type}</p>
                    <p>{props.card.card.text}</p>
                    {props.card.card.power ? <p>Power/Toughness: {props.card.card.power}/{props.card.card.toughness}</p> : null}
                    {props.card.card.loyalty ? <p>Loyalty: {props.card.card.loyalty}</p> : null}
                    <p>{props.card.card.setName}</p>
                </div>
            </div>
        </div>
    );
}
export default DeckView