import React, { Component } from 'react';
import Search from './components/Search'
import './App.css';
import Resultlist from './components/Resultlist';
import Sidelist from './components/Sidelist';

class App extends Component {
  render() {
    return (
      // main tag App
      <div className="container">
      <div className="row">
      <div className="col-md-8">
        <Search/>
        <Resultlist/>

      </div>
      <div className="col-md-4">
      <Sidelist/>
      </div>
      </div>
      </div>
    );
  }
}

export default App; 
// app kiyana class eka expport karala tyenne
