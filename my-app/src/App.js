import React, { Component } from 'react';
import './css/App.css';
import AppRouter from './components/router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AppRouter></AppRouter>
        </header>
      </div>
    );
  }
}

export default App;
