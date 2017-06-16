import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateLyric extends Component {
  static propTypes = {
    songId: PropTypes.string.isRequired,
    mutate: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  handleChange = e => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { songId, mutate } = this.props;
    const { content } = this.state;
    return mutate({
      variables: {
        content,
        songId,
      },
    }).then(() => this.setState({ content: '' }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="add-lyric">Add a Lyric</label>
        <input value={this.state.content} onChange={this.handleChange} />
      </form>
    );
  }
}

export default CreateLyric;
