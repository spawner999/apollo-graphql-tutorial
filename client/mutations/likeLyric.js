import gql from 'graphql-tag';

const mutation = gql`
  mutation likeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default mutation;
