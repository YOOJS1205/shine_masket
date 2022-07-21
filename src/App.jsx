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
import ToProfile from './pages/ToProfile/ToProfile';
import YourProfile from './pages/YourProfile/YourProfile';
import Post from './pages/Post/Post';
import ModifyProfile from './pages/ModifyProfile/ModifyProfile';
import Upload from './pages/Upload/Upload';
import Follower from './pages/Follower/Follower.jsx';
import Following from './pages/Following/Following.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';
import HomeEmpty from './pages/HomeEmpty/HomeEmpty';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact component={Splash} />
            <Route path="/welcome" exact component={Welcome} />
            <Route path="/login" exact component={Login} />
            <Route path="/join" exact component={Join} />
            <Route path="/join/profile" exact component={ProfileSetting} />
            <Route path="/post/:postId" exact component={Post} />
            <Route path="/upload" exact component={Upload} />
            <Route path="/chat-list" exact component={ChatList} />
            <Route path="/chat-room" exact component={ChatRoom} />
            <Route path="/profile/:accountname" exact component={ToProfile} />
            <Route path="/profile" exact component={ToProfile} />
            <Route path="/my-profile/add-product" exact component={AddProduct} />
            <Route path="/your-profile" exact component={YourProfile} />
            <Route path="/profile/modify" exact component={ModifyProfile} />
            <Route path="/follower" exact component={Follower} />
            <Route path="/following" exact component={Following} />
            <Route path="/home-empty" exact component={HomeEmpty} />
            <Route path="/search" exact component={Search} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
