import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import CreateLyric from '../containers/CreateLyric';
import LyricList from '../containers/LyricList';

class SongDetail extends Component {
  static propTypes = {
    data: PropTypes.shape({
      song: PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        lyrics: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
          }),
        ),
      }),
    }).isRequired,
  };

  render() {
    const { data: { song: { title, id, lyrics } } } = this.props;

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{title}</h3>
        <LyricList lyrics={lyrics} />
        <CreateLyric songId={id} />
      </div>
    );
  }
}

export default SongDetail;
