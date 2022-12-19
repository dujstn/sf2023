import React from "react";
import logo from "./logo.svg";

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>
          <img src={logo} className="Home-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="/demo"
            target="_self"
            rel="noopener noreferrer"
          >See the demo</a>
          <br />
          <a
            className="Home-link"
            href="/notes"
            target="_self"
            rel="noopener noreferrer"
          >
            Try it yourself
          </a>

        </h1>
      </header>
    </div>
  );
};

export default Home;
