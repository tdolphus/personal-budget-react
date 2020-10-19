import React from 'react';
import './App.css';

import Menu from './Menu/Menu'
import Hero from './Hero/Hero'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import MyChart from './MyChart/MyChart.js';



function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Switch>
          <Route path = "/about">
            <AboutPage/>
            

          </Route>
          <Route path = "/Login">
            <LoginPage/>

          </Route>
          <Route path = "/">
            <HomePage/>

          </Route>

        
        </Switch>
      </div>
     
     
      <Footer/>

      <MyChart/>

    </Router>
  
  );
}

export default App;
