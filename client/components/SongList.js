import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import query from '../queries/songList';

class SongList extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired,
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      songs: PropTypes.array
    }).isRequired
  };

  static defaultProps = {
    songs: []
  };

  deleteSong = id => {
    const { mutate } = this.props;
    mutate({
      variables: { id },
      refetchQueries: [{ query }]
    });
  };

  renderSongs() {
    const { data: { songs } } = this.props;
    return songs.map(({ id, title }) => (
      <li className="collection-item" key={id}>
        {title}
        <i
          role="button"
          tabIndex={0}
          className="material-icons"
          onClick={() => this.deleteSong(id)}
        >
          delete
        </i>
      </li>
    ));
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
