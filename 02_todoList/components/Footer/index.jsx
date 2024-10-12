import React, { Component } from "react";

export default class Footer extends Component {
  HandelCheckedAll = (e) => {
    console.log(e);
    this.props.checkedAllDone(e.target.checked);
  };
  handleClearAll = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todoList } = this.props;
    const doneCount = todoList.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0);
    }, 0);
    const totalCount = todoList.length;

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <input
              type="checkbox"
              onChange={this.HandelCheckedAll}
              checked={
                totalCount === doneCount && totalCount > 0 ? true : false
              }
            />
            &nbsp;
            <span>
              已完成{doneCount}个 / 全部{totalCount}个
            </span>
          </div>
          <div>
            <button onClick={this.handleClearAll}>清除已完成任务</button>
          </div>
        </div>
      </div>
    );
  }
}
