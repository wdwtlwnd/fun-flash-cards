import React from 'react';
import { connect } from 'react-redux';
import App from './presenter';

function mapStateToProps(state) {
  const { route } = state;

  return {
    route,
  }
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
