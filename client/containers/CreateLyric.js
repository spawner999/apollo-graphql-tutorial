import { graphql } from 'react-apollo';

import CreateLyric from '../components/CreateLyric';
import mutation from '../mutations/addLyricToSong';

export default graphql(mutation)(CreateLyric);
