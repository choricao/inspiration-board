import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  renderCards = () => {
    const cards = CARD_DATA.cards.map( (card, index) => {
      return (
        <Card
          key={index}
          text={card.text}
          emoji={card.emoji}
          />
      );
    });

    console.log(cards);
    return cards;
  }

  render() {
    return (
      <div>
        {this.renderCards()}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
