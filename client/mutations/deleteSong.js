import gql from 'graphql-tag';

const mutation = gql`
  mutation deleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default mutation;
