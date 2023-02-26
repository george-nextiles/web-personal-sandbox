import React, { Component } from 'react';
import logo from './logo.svg';
import './Loading.css';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <header className="Loading-header">
          <img src={logo} className="Loading-logo" alt="logo" />
          <p>
            Edit <code>src/Loading.js</code> and save to reload.
          </p>
          <a
            className="Loading-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Loading;
