import React, { Component } from "react";
import Item from "../Item/index";
import PropTypes from "prop-types";
import "./index.css";
export default class List extends Component {
  // 对prop传参进行限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    todoList: PropTypes.array.isRequired,
  };
  render() {
    const { todoList, updateTodo, deleteTodo } = this.props;
    return (
      <ul>
        {todoList.map((ele) => {
          return (
            <Item
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              key={ele.id}
              item={ele}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
