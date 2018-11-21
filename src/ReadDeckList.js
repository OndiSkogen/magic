import React from 'react';
import DeckView from './DeckView';

class ReadDeckList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deckList: [],
            loading: false,
            card: null
        }
    }

    readUploadedFileAsText = (inputFile) => {
        const temporaryFileReader = new FileReader();

        return new Promise((resolve, reject) => {
            temporaryFileReader.onerror = () => {
                temporaryFileReader.abort();
                reject(new DOMException("Problem parsing input file."));
            };

            temporaryFileReader.onloadend = () => {
                resolve(temporaryFileReader.result);
            };
            temporaryFileReader.readAsText(inputFile);
        });
    };

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }


    massageData = async (content) => {
        let res = content.trim().split('\n');
        let tmp = [];
        for (let card of res) {
            let response = await fetch('https://api.magicthegathering.io/v1/cards/?contains=imageUrl&name="' + card.slice(2) + '"');
            let result = await response.json();
            let tmpId = result.cards[0].multiverseid;
            if (tmpId) {
                let response2 = await fetch('https://api.magicthegathering.io/v1/cards/' + tmpId);
                let result2 = await response2.json();
                tmp.push(result2);
            }
        }
        return tmp;
    }
    handleFileChosen = async (file) => {
        console.log("before read");
        let content = await this.readUploadedFileAsText(file);
        console.log(content, "content");
        console.log("after read");
        // this.setState({ loading: true })
        let tmp = [];
        tmp = await this.massageData(content);

        await console.log(tmp, "tmp");
        await this.setStateAsync({ deckList: tmp });
    };

    handleClick(id) {
        fetch('https://api.magicthegathering.io/v1/cards/' + id).then(res => res.json()).then(result => {
            this.setState({ card: result });
            console.log(result, "resultttt");
          });
    }

    render() {
        return (
            <div>
                <input type='file' accept='.txt' onChange={e => this.handleFileChosen(e.target.files[0])} />
                <div>
                    <h3>Deck View</h3>
                    <ul>
                        {this.state.deckList.map(d =>
                            <li key={d.card.id} onClick={() => this.handleClick(d.card.multiverseid)}>{d.card.name}</li>)}
                    </ul>
                </div>
                {this.state.card ? <DeckView card={this.state.card} /> : null }
            </div>
        );
    }
}

export default ReadDeckList;