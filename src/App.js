import React from 'react';
import './App.css';
import CardSearch from './CardSearch';
import CardView from './CardView';
import ReadDeckList from './ReadDeckList';
import DeckView from './DeckView';
import Menu from './Menu';
import Booster from './Booster';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      cards: [],
      deckList: []
    }

    this.onTextChange = this.onTextChange.bind(this);
    this.onSearchButtonClick = this.onSearchButtonClick.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.setDeckList = this.setDeckList.bind(this);
  }

  onSearchButtonClick() {
    fetch("https://api.magicthegathering.io/v1/cards/?name=" + this.state.searchText).then(res => res.json()).then(result => {
      this.setState({ cards: result.cards });
    });
  }

  onKeyUp(e) {
    if (e.which !== 13) {
      return;
    }
    fetch("https://api.magicthegathering.io/v1/cards/?name=" + this.state.searchText).then(res => res.json()).then(result => {
      this.setState({ cards: result.cards });
    });
  }

  onTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  setDeckList(deckList) {
    this.setState({ deckList: deckList });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Menu />            
            <Route exact path="/search" 
            render={(props) => <CardSearch change={this.onTextChange} click={this.onSearchButtonClick} searchText={this.state.searchText} onKeyUp={this.onKeyUp} />} />
            <Route exact path="/search"
            render={(props) => <CardView cards={this.state.cards} />} />
            <Route exact path="/deck"
            render={(props) => <ReadDeckList change={this.setDeckList} />} />
            <Route exact path="/deck"
            render={(props) => <DeckView deckList={this.state.deckList} />} />
            <Route exact path="/booster" component={Booster} />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
