import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import HomePage from './pages/HomePage/HomePage';
const history = createHistory();

import TopBar from './components/TopBar/TopBar';

const App = () => {
  return (
    <div className='App'>
      <Router history={history}>
        <TopBar />
        <Route path='/' exact component={HomePage} />
      </Router>
    </div>
  );
};

export default App;
