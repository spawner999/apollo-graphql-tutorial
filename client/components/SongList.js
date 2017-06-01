import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
      <div>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link to="songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default SongList;
