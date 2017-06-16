import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics.map(l => <ul className="collection-item" key={l.id}>{l.content}</ul>);
  }

  render() {
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>
    );
  }
}

export default LyricList;
