import gql from 'graphql-tag';

const mutation = gql`
  mutation addSong($title: String) {
    addSong(title: $title) {
      id
    }
  }
`;

export default mutation;
