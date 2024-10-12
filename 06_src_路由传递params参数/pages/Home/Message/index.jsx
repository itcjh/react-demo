import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import MessageDetail from "./Detail";
export default class Message extends Component {
  state = {
    messageList: [
      {
        id: 1,
        title: "消息1",
      },
      {
        id: 2,
        title: "消息2",
      },
      {
        id: 3,
        title: "消息3",
      },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.messageList.map((ele) => {
            return (
              <li key={ele.id}>
                <Link to={`/home/message/detail/${ele.id}/${ele.title}`}>
                  {ele.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <Route
          path="/home/message/detail/:id/:title"
          component={MessageDetail}
        ></Route>
      </div>
    );
  }
}
