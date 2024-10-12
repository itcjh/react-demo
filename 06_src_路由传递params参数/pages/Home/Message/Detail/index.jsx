import React, { Component } from "react";
const data = [
  {
    id: 1,
    content: "content1",
  },
  {
    id: 2,
    content: "content2",
  },
  {
    id: 3,
    content: "content3",
  },
];
export default class MessageDetail extends Component {
  render() {
    console.log(this.props);
    const { id, title } = this.props.match.params;
    const result = data.find((ele) => {
      return ele.id == id;
    });
    console.log(result);
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{result.content}</li>
        </ul>
      </div>
    );
  }
}
