import React from "react";

const Loading = () => {
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

  export default Loading