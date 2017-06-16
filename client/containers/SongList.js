import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import SongList from '../components/SongList';
import withQuery from '../containers/withQuery';
import query from '../queries/songs';
import mutation from '../mutations/deleteSong';

const enhance = compose(withQuery(query), graphql(mutation));

export default enhance(SongList);
