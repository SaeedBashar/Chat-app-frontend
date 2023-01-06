
// import SignIn from './components/auth/signin';
import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import ChatList from './components/chatList/chatList';


const App = ()=> {

  
  return (
    <div className="App">
      <Navigation />
      <ChatList />
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
