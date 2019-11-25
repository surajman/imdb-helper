import React from 'react';
import './App.css';
import MovieList from './MovieList/container';
import MovieDetail from './MovieDetail/container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/movie-list">
            <MovieList />
          </Route>
          <Route path="/movie-detail/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
