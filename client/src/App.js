import React, { Component } from 'react';
import List from './components/List';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
