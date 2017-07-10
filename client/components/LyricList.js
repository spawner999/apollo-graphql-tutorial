import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LyricList extends Component {
  static propTypes = {
    lyrics: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    ).isRequired,
    mutate: PropTypes.func.isRequired,
  };

  likeLyric = id => {
    this.props.mutate({
      variables: { id },
    });
  };

  renderLyrics() {
    const { lyrics } = this.props;
    return lyrics.map(({ id, content, likes }) => (
      <ul className="collection-item" key={id}>
        {content}
        <div className="vote-box">
          {likes}
          <i
            role="button"
            tabIndex={0}
            className="material-icons"
            onClick={() => {
              this.likeLyric(id);
            }}
          >
            thumb_up
          </i>
        </div>
      </ul>
    ));
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
