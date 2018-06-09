import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Todo App</h1>
        </header>
        <List></List>
      </div>
    );
  }
}

export default App;
