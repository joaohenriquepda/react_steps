import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GithubSearch from './components/GithubSearch'


class App extends Component {
  render() {
    return (
      <div className="container App">
        <img src={logo} className="App-logo" alt="logo"/>
        <GithubSearch/>
      </div>
    );
  }
}

export default App;
