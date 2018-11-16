import React from 'react';

const ReadDeckList = (props) => {
    let fileReader;
    let deckList = [];
    let obj;

    // Gör om datan från filen till en array av kortobjekt
    const handleFileRead = (e) => {
        const content = fileReader.result;
        let res = content.trim().split('\n');
        deckList = res.map(card => 
            obj = {"number": card.charAt(0), "name": card.slice(2)}
            )    
        props.change(deckList);
    };

    // Läser vald fil
    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file, 'utf8');
    };

    return <div>
        <input type='file' accept='.txt' onChange={e => handleFileChosen(e.target.files[0])} />
    </div>
};
export default ReadDeckList;