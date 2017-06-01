import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import SongList from './containers/SongList';
import CreateSong from './containers/CreateSong';

const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
        <Route path="songs/new" component={CreateSong} />
      </Route>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
