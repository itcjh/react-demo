// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
class App extends React.Component {
  state = {
    todoList: [
      {
        id: 1,
        name: "吃饭",
        done: false,
      },
      {
        id: 2,
        name: "睡觉",
        done: false,
      },
      {
        id: 3,
        name: "学习",
        done: true,
      },
    ],
  };
  addTodo = (obj) => {
    const { todoList } = this.state;
    let list = [obj, ...todoList];
    this.setState({
      todoList: list,
    });
  };
  updateTodo = (id, status) => {
    console.log(id, status);
    const { todoList } = this.state;
    const newObj = todoList.map((ele) => {
      if (ele.id === id) {
        return { ...ele, done: status };
      } else {
        return ele;
      }
    });
    this.setState({
      todoList: newObj,
    });
  };
  deleteTodo = (id) => {
    console.log(id);
    const { todoList } = this.state;
    const newObj = todoList.filter((ele) => ele.id !== id);
    this.setState({ todoList: newObj });
  };
  checkedAllDone = (done) => {
    const { todoList } = this.state;
    const newObj = todoList.map((ele) => {
      return { ...ele, done: done };
    });
    this.setState({
      todoList: newObj,
    });
  };
  clearAllDone = () => {
    const { todoList } = this.state;
    const newObj = todoList.filter((ele) => {
      return !ele.done;
    });
    this.setState({
      todoList: newObj,
    });
  };

  render() {
    return (
      <div className="todolist">
        <Header addTodo={this.addTodo} />
        <List
          todoList={this.state.todoList}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          todoList={this.state.todoList}
          checkedAllDone={this.checkedAllDone}
          clearAllDone={this.clearAllDone}
        />
      </div>
    );
  }
}

export default App;
