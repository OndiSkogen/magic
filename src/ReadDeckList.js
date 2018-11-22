import React from 'react';
import DeckView from './DeckView';
import Spinner from './Spinner';

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
            if (card.length > 1) {
                let response = await fetch('https://api.magicthegathering.io/v1/cards/?contains=imageUrl&name="' + card.slice(2) + '"');
                let result = await response.json();
                let tmpId = result.cards[0].multiverseid;
                if (tmpId) {
                    let response2 = await fetch('https://api.magicthegathering.io/v1/cards/' + tmpId);
                    let result2 = await response2.json();
                    tmp.push(result2);
                }
            }
        }
        return tmp;
    }
    
    handleFileChosen = async (file) => {
        let content = await this.readUploadedFileAsText(file);
        this.setState({ loading: true })
        let tmp = [];
        tmp = await this.massageData(content);

        await this.setStateAsync({ deckList: tmp, loading: false });
    };

    handleClick(id) {
        fetch('https://api.magicthegathering.io/v1/cards/' + id).then(res => res.json()).then(result => {
            this.setState({ card: result });
        });
    }

    render() {
        return (
            <div className="main-container">
                <input type='file' accept='.txt' onChange={e => this.handleFileChosen(e.target.files[0])} />                
                <div className="grid-container-deck">
                    {this.state.deckList.map(d => 
                        <div className="grid-item" key={d.card.id} onClick={() => this.handleClick(d.card.multiverseid)}>
                            {d.card.name}
                        </div>
                    )}
                </div>
                {this.state.loading ? <Spinner /> : null}
                {this.state.card ? <DeckView card={this.state.card} /> : null}
            </div>
        );
    }
}

export default ReadDeckList;