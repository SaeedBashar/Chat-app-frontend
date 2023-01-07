
// import SignIn from './components/auth/signin';
import React, { useEffect, useState } from 'react';
import './App.css';
import Navigation from './components/navigation/navigation';
import ChatList from './components/chatList/chatList';
import ChatMessages from './components/chatMessages/chatMessages';


const App = ()=> {

  
  return (
    <div className="App">
      <Navigation />
      <ChatList />
      <ChatMessages/>
      {/* <SignIn /> */}
    </div>
  );
}

export default App;
