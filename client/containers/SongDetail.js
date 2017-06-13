import SongDetail from '../components/SongDetail';
import withQuery from '../containers/withQuery';
import query from '../queries/songDetail';

const queryOptions = {
  options: props => ({ variables: { id: props.params.id } })
};

export default withQuery(query, queryOptions)(SongDetail);
