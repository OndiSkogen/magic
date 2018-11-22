import React from 'react';
import './App.css';
import CardSearch from './CardSearch';
import ReadDeckList from './ReadDeckList';
import Menu from './Menu';
import Booster from './Booster';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Menu />
          <Route exact path="/search" component={CardSearch} />
          <Route exact path="/deck" component={ReadDeckList} />
          <Route exact path="/booster" component={Booster} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
