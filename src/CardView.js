import * as React from 'react';
import { Image, Table } from "semantic-ui-react";

const CardView = (props) => {
    return (<Table inverted>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Image</Table.HeaderCell>
                <Table.HeaderCell>Rules text</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
        {props.cards.map(card =>
            <Table.Row key={card.id}>
                {card.imageUrl ? <Table.Cell><Image size='medium' src={card.imageUrl} /></Table.Cell> : <Table.Cell><Image size='medium' src=".\Magic_card_back.jpg" /></Table.Cell>}
                <Table.Cell>{card.text}</Table.Cell>
            </Table.Row>
        )}
        </Table.Body>
    </Table>);
}
export default CardView;