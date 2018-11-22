import * as React from 'react';
import CardView from './CardView';

class CardSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            cards: []
        }
        this.onTextChange = this.onTextChange.bind(this);
        this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onTextChange(e) {
        this.setState({ searchText: e.target.value });
    }

    onSearchButtonClick() {
        fetch("https://api.magicthegathering.io/v1/cards/?contains=imageUrl&name=" + this.state.searchText).then(res => res.json()).then(result => {
            this.setState({ cards: result.cards });
        });
    }

    onKeyUp(e) {
        if (e.which !== 13) {
            return;
        }
        fetch("https://api.magicthegathering.io/v1/cards/?contains=imageUrl&name=" + this.state.searchText).then(res => res.json()).then(result => {
            this.setState({ cards: result.cards });
        });
    }

    render() {
        return (
            <div className="main-container">
                <input type='text' value={this.state.searchText} onChange={this.onTextChange} onKeyUp={this.onKeyUp} />
                <button className="myButton" onClick={this.onSearchButtonClick}>Search</button>
                <CardView cards={this.state.cards} />
            </div>
        );
    }
}

export default CardSearch;