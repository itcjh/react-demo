// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="head">
          <h2>React Router Demo</h2>
        </div>

        <div
          className="content"
          style={{ height: "300px", width: "400px", display: "flex" }}
        >
          <div className="left" style={{ height: "300px", width: "50%" }}>
            <Link to="/about">About</Link>
            <br></br>
            <Link to="/home">Home</Link>
          </div>
          <div className="right" style={{ height: "300px", width: "50%" }}>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
