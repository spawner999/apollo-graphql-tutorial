import { graphql } from 'react-apollo';

import LyricList from '../components/LyricList';
import mutation from '../mutations/likeLyric';

export default graphql(mutation)(LyricList);
