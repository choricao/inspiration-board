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

  render() {
    return (
      <div>
        <Card
          text={CARD_DATA.cards[1].text}
          emoji={CARD_DATA.cards[1].emoji}
          />
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
