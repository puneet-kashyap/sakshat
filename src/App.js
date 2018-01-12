import React, { Component } from 'react';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Home from './Components/Home/Home';

import './App.css';


class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Home />
          <Footer />
      </div>
    );
  }
}

export default App;
