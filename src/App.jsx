import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './styles/app.css';
import './styles/reset.css';
import Splash from './pages/Splash/Splash';
import Welcome from './pages/Welcome/Welcome';
import Login from './pages/Login/Login';
import ChatList from './pages/ChatList/ChatList';
import Join from './pages/Join/Join';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import MyProfile from './pages/MyProfile/MyProfile';
import Post from './pages/Post/Post';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Splash} />
          <Route path="/welcome" exact component={Welcome} />
        </Switch>
      </AnimatePresence>
      <Route path="/login" exact component={Login} />
      <Route path="/join" exact component={Join} />
      <Route path="/post" exact component={Post} />
      <Route path="/chat-list" exact component={ChatList} />
      <Route path="/chat-room" exact component={ChatRoom} />
      <Route path="/my-profile" exact component={MyProfile} />
    </BrowserRouter>
  );
}

export default App;
