import gql from 'graphql-tag';

const deleteSong = gql`
  mutation deleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default deleteSong;
