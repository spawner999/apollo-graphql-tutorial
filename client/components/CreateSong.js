import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';

class CreateSong extends Component {
  static propTypes = {
    mutate: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      songTitle: ''
    };
  }

  updateSongTitle = event => {
    const songTitle = event.target.value;
    this.setState({
      songTitle
    });
  };

  handleSumbmit = event => {
    event.preventDefault();
    const { mutate } = this.props;
    const { songTitle } = this.state;

    return mutate({
      variables: {
        title: songTitle
      }
    }).then(hashHistory.push('/'));
  };

  render() {
    const { songTitle } = this.state;
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a new Song</h3>
        <form onSubmit={this.handleSumbmit}>
          <label htmlFor="title">Title</label>
          <input onChange={this.updateSongTitle} value={songTitle} />
        </form>
      </div>
    );
  }
}

export default CreateSong;
