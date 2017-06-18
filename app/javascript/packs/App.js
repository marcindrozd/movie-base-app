import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import Header from './components/common/Header';
import HomePage from './components/HomePage';
import MoviesPage from './components/MoviesPage';
import MoviePage from './components/MoviePage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          {this.props.children}

          <Switch>
            <Route path="/movies" render={MoviesPage} />
            <Route exact path="/" render={HomePage} />

            <Route render={({ location }) => (
              <div>
                <h3>Error! No matches for <code>{location.pathname}</code>!</h3>
              </div>
            )} />
          </Switch>
        </div>
      </Router>
    )
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired,
}

export default App;
