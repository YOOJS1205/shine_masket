import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/app.css';
import './styles/reset.css';
import Splash from './pages/Splash/Splash';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import ChatList from './pages/ChatList/ChatList';
import Join from './pages/Join/Join';
import ChatRoom from './pages/ChatRoom/ChatRoom';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Splash} />
      <Route path="/welcome" exact component={Welcome} />
      <Route path="/login" exact component={Login} />
      <Route path="/join" exact component={Join} />
      <Route path="/chat-list" exact component={ChatList} />
      <Route path="/chat-room" exact component={ChatRoom} />
    </BrowserRouter>
  );
}

export default App;
