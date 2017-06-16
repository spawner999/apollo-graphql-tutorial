import gql from 'graphql-tag';

const query = gql`
    query song($id: ID!) {
      song(id: $id) {
        title,
        id,
        lyrics {
          content,
          id
        }
      }
    }
`;

export default query;
