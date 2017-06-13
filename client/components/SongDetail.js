import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SongDetail extends Component {
  static propTypes = {
    data: PropTypes.shape({
      song: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    }).isRequired
  };

  render() {
    const { data: { song: { title } } } = this.props;
    return (
      <div>
        <h3>Song Detail</h3>
        <p>{title}</p>
      </div>
    );
  }
}

export default SongDetail;
