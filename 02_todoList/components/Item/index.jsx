import React, { Component } from "react";
import "./index.css";
export default class Item extends Component {
  state = {
    mouse: false,
  };
  handleMouse = (flag) => {
    return () => {
      // console.log(flag);
      this.setState({
        mouse: flag,
      });
    };
  };
  handelCheck = (id) => {
    return (e) => {
      // console.log(id, e.target.checked);
      this.props.updateTodo(id, e.target.checked);
    };
  };
  handelDel = (id) => {
    this.props.deleteTodo(id);
  };
  render() {
    const { item } = this.props;
    return (
      <li
        style={{ background: this.state.mouse ? "#ddd" : "#fff" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
      >
        <label>
          <input
            type="checkbox"
            checked={item.done}
            onChange={this.handelCheck(item.id)}
          />
          <span>{item.name}</span>
        </label>
        <button
          onClick={() => {
            this.handelDel(item.id);
          }}
          style={{ display: this.state.mouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
