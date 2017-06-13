import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
    const { mutate, data } = this.props;
    mutate({
      variables: { id }
    })
      .then(() => data.refetch())
      .catch();
  };

  renderSongs() {
    const { data: { songs } } = this.props;
    return songs.map(({ id, title }) => (
      <li className="collection-item" key={id}>
        <Link to={`songs/${id}`}>{title}</Link>
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
