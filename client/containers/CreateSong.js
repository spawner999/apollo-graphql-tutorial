import { graphql } from 'react-apollo';

import CreateSong from '../components/CreateSong';
import mutation from '../mutations/createSong';

export default graphql(mutation)(CreateSong);
