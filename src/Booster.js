import React from 'react';

class Booster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sets: ["ixa", "rix", "dom", "m19", "grn"],
            cards: []
        }
    }

    componentWillMount() {
        let index = Math.floor(Math.random() * 5);
        fetch('https://api.magicthegathering.io/v1/sets/' + this.state.sets[index] + '/booster').then(res => res.json()).then(result => {
            console.log(result, "booster");
            this.setState({ cards: result.cards });
        });
    }

    render() {
        return (
            <div className="main-container">
                <div className="grid-container">
                    {this.state.cards.map(card =>
                        <div className="grid-item"><img src={card.imageUrl} alt={card.name} height="245" width="175" /></div>
                    )}
                </div>
            </div>
        );
    }
}

export default Booster;