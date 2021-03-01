import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { HomePage } from '../HomePage/HomePage';
import { ResultPage } from '../ResultPage/ResultPage';
import { Header } from '../Header/Header';

import './app.scss';

const App = ({ fetch }) => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (fetch ? <Redirect to="/result" /> : <HomePage />)}
        />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ fetch }) => {
  return { fetch };
};

export default connect(mapStateToProps)(App);
