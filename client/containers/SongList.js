import SongList from '../components/SongList';
import withQuery from '../containers/withQuery';

import query from '../queries/songList';

export default withQuery(query)(SongList);
