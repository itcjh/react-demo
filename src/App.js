// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
class App extends React.Component {
  render() {
    /** 路由组件与一般组件的不同
     * 1.写法不同:
     *    一般组件:<Demo/>
     *    路由组件:<Route to='/xxx' component={xxx}/>
     * 2.存放位置不同
     *    一般路由:component
     *    路由组件:pages
     * 3.接收到的props不同
     *
     */

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
            <NavLink activeClassName="aaa" to="/about">
              About
            </NavLink>
            <br></br>
            <NavLink activeClassName="aaa" to="/home">
              Home
            </NavLink>
          </div>
          <div className="right" style={{ height: "300px", width: "50%" }}>
            <Switch>
              <Route path="/about" component={About} />
              <Route path="/home" component={Home} />
              <Redirect to="about" />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
