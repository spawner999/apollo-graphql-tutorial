import { graphql } from 'react-apollo';

import CreateSong from '../components/CreateSong';
import mutation from '../mutations/addSong';

export default graphql(mutation)(CreateSong);
