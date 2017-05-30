import React from 'react';
import { graphql } from 'react-apollo';
import { branch, compose, renderComponent } from 'recompose';

const isLoading = ({ data: { loading } }) => loading;

function withQuery(query) {
  return compose(graphql(query), branch(isLoading, renderComponent(() => <div>Loading</div>)));
}

export default withQuery;
