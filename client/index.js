import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import SongList from './containers/SongList';

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <SongList />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
