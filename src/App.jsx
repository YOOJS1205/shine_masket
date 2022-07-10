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
import ProfileSetting from './pages/ProfileSetting/ProfileSetting';
import ChatRoom from './pages/ChatRoom/ChatRoom';
import MyProfile from './pages/MyProfile/MyProfile';
import Post from './pages/Post/Post';
import ModifyProfile from './pages/ModifyProfile/ModifyProfile';
import Upload from './pages/Upload/Upload';
import Follower from './pages/Follower/Follower.jsx';

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
      <Route path="/join/profile" exact component={ProfileSetting} />
      <Route path="/post" exact component={Post} />
      <Route path="/upload" exact component={Upload} />
      <Route path="/chat-list" exact component={ChatList} />
      <Route path="/chat-room" exact component={ChatRoom} />
      <Route path="/my-profile" exact component={MyProfile} />
      <Route path="/profile/modify" exact component={ModifyProfile} />
      <Route path="/follower" exact component={Follower} />
    </BrowserRouter>
  );
}

export default App;
