import * as React from 'react';

const CardSearch = (props) => {  
        return (<div>
            <input type='text' value={props.searchText} onChange={props.change} onKeyUp={props.onKeyUp} />
            <button onClick={props.click}>Sök</button>
        </div>);    
}

export default CardSearch;