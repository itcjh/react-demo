import React, { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
export default class Header extends Component {
  // 对prop传参进行限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (e) => {
    // console.log(e)
    if (e.keyCode !== 13) return;
    console.log(e.target.value);
    if (e.target.value.trim() === "") {
      return;
    }
    let obj = {
      id: nanoid(),
      name: e.target.value,
      done: false,
    };
    this.props.addTodo(obj);
    e.target.value = "";
  };
  render() {
    return (
      <div>
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入任务名称"
        />
      </div>
    );
  }
}
