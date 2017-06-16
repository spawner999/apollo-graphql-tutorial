import gql from 'graphql-tag';

const query = gql`
    {
      songs {
        title,
        id
      }
    }
`;

export default query;
