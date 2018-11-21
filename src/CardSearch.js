import * as React from 'react';

const CardSearch = (props) => {  
        return (<div className="main-container">
            <input type='text' value={props.searchText} onChange={props.change} onKeyUp={props.onKeyUp} />
            <button onClick={props.click}>Search</button>
        </div>);    
}

export default CardSearch;