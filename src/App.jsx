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
import UserProfile from './pages/UserProfile/UserProfile';
import YourProfile from './pages/YourProfile/YourProfile';
import Post from './pages/Post/Post';
import PostUpdate from './pages/PostUpdate/PostUpdate';
import ModifyProfile from './pages/ModifyProfile/ModifyProfile';
import Upload from './pages/Upload/Upload';
import Follower from './pages/Follower/Follower.jsx';
import Following from './pages/Following/Following.jsx';
import FollowListPage from './pages/FollowListPage/FollowListPage.jsx';
import AddProduct from './pages/AddProduct/AddProduct.jsx';
import HomeFeed from './pages/HomeFeed/HomeFeed';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';

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
            <Route path="/home-feed" exact component={HomeFeed} />
            <Route path="/post/:postId" exact component={Post} />
            <Route path="/post/:postId/update" component={PostUpdate} exact />
            <Route path="/upload" exact component={Upload} />
            <Route path="/chat-list" exact component={ChatList} />
            <Route path="/chat-room" exact component={ChatRoom} />
            <Route path="/profile/:accountname" exact component={UserProfile} />
            <Route path="/profile" exact component={UserProfile} />
            <Route path="/profile/:accountname/follower" exact component={FollowListPage} />
            <Route path="/profile/:accountname/following" exact component={FollowListPage} />
            <Route path="/:accountname/add-product" exact component={AddProduct} />
            <Route path="/your-profile/:accountname" exact component={YourProfile} />
            <Route path="/profile/:accountname/modify" exact component={ModifyProfile} />
            <Route path="/follower" exact component={Follower} />
            <Route path="/following" exact component={Following} />
            <Route path="/search" exact component={Search} />
            <Route path="/home" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
