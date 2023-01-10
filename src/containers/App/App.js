
// import SignIn from './components/auth/signin';
import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Paths from '../paths/paths';

const App = ()=> {

  return (
    <div className="App">
      <Router>
        <Paths/>
      </Router>
    </div>
  );
}

export default App;

