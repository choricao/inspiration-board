import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {

  renderEmoji = () => {
    if (this.props.emoji) {
      return (
        <p>{emoji.getUnicode(this.props.emoji)}</p>
      );
    }
  }

  render() {
    return (
      <div className="card">
        <p>{this.props.text}</p>
        {this.renderEmoji()}
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
};

export default Card;
