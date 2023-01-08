
// import SignIn from './components/auth/signin';
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import ChatList from './components/chatList/chatList';
import ChatMessages from './components/chatMessages/chatMessages';

import './App.css';
import Pages from './containers/pages/pages';

const App = ()=> {

  return (
    <div className="App">
      <Router>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;

