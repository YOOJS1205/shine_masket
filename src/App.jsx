import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/app.css';
import './styles/reset.css';
import Splash from './pages/Splash/Splash';
import Welcome from './pages/Welcome/Welcome';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Splash} />
      <Route path="/welcome" exact component={Welcome} />
    </BrowserRouter>
  );
}

export default App;
