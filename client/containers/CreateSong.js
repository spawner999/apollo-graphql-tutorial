import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import CreateSong from '../components/CreateSong';

const mutation = gql`
  mutation addSong($title: String) {
    addSong(title: $title) {
      id
    }
  }
`;

export default graphql(mutation)(CreateSong);
