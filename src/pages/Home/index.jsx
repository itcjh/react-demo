import React, { Component } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import News from "./News";
import Message from "./Message";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>我是Home路由</h2>
        <div style={{ display: "flex" }}>
          <NavLink activeClassName="aaa" to="/home/news">
            News
          </NavLink>
          &nbsp;
          <NavLink activeClassName="aaa" to="/home/message">
            Message
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}
