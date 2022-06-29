import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/app.css';
import './styles/reset.css';
import Splash from './pages/Splash/Splash';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Splash} />
    </BrowserRouter>
  );
}

export default App;
