import gql from 'graphql-tag';

const createSong = gql`
  mutation addSong($title: String) {
    addSong(title: $title) {
      id
    }
  }
`;

export default createSong;
