import gql from 'graphql-tag';

const mutation = gql`
  mutation addLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content,
        id
      }
    }
  }
`;

export default mutation;
