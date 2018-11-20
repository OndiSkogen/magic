import * as React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div id="menu">
            <Link to="/" className="myLink">Home</Link>
            <Link to="/search" className="myLink">Card Search</Link>
            <Link to="/deck" className="myLink">Upload Deck</Link>
            <Link to="/booster" className="myLink">Open a Booster</Link>
        </div>
    )
}
export default Menu;