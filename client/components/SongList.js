import React, { Component, PropTypes } from 'react';

class SongList extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      songs: PropTypes.array
    }).isRequired
  };

  static defaultProps = {
    songs: []
  };

  renderSongs() {
    const { data: { songs } } = this.props;
    return songs.map(s => <li className="collection-item" key={s.id}>{s.title}</li>);
  }

  render() {
    return (
      <ul className="collection">
        {this.renderSongs()}
      </ul>
    );
  }
}

export default SongList;
