import React, { Component } from 'react';
import logo from './logo.svg';
import { OrderContainer } from "./components/OrderContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderContainer />
      </div>
    );
  }
}

export default App;
