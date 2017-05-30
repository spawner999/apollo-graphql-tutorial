import gql from 'graphql-tag';

import SongList from '../components/SongList';
import withQuery from '../containers/withQuery';

const query = gql`
    {
      songs {
        title,
        id
      }
    }
`;

export default withQuery(query)(SongList);
