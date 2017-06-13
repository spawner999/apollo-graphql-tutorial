import gql from 'graphql-tag';

const query = gql`
    query songDetail($id: ID!) {
      song(id: $id) {
        title
      }
    }
`;

export default query;
