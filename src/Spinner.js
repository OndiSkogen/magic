import React from 'react';

const Spinner = () => {
    return (
        <div>
            <p id="spinner-message">This is gonna take a while...</p>
            <div className="lds-hourglass"></div>
        </div>
    );
}

export default Spinner;