import React, { Component } from 'react';
import me from './code_monkey.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <code class="App__header-code">
            {"<div></div>"}
          </code>
          <img src={me} className="App__header-img" alt="me" />
        </header>
      </div>
    );
  }
}

export default App;
