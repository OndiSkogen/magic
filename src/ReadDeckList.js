import React from 'react';

const ReadDeckList = (props) => {
    let fileReader;
    let deckList = [];

    // Gör om datan från filen till en array av kortobjekt
    const handleFileRead = (e) => {
        const content = fileReader.result;
        let res = content.trim().split('\n');
        for (let card of res) {
            // I sällsynta fall har vissa lekar fler än 10 av ett kort och det kollas här  
            if (card.charAt(1) !== " " && card.charAt(1) !== "") {
                let obj = {"number": card.charAt(0) + card.charAt(1), "name": card.slice(3)};
                deckList.push(obj);
            }
            let obj = {"number": card.charAt(0), "name": card.slice(2)};
            deckList.push(obj);
        }
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