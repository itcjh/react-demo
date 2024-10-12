import React, { Component } from "react";
// import qs from "querystring";
// console.log(qs.parse("a=1&b=2"));
// const data = [
//   {
//     id: 1,
//     content: "content1",
//   },
//   {
//     id: 2,
//     content: "content2",
//   },
//   {
//     id: 3,
//     content: "content3",
//   },
// ];
export default class MessageDetail extends Component {
  render() {
    console.log(this.props);
    // 接收parmas参数
    // const { id, title } = this.props.match.params;

    // 接收search参数
    const { search } = this.props.location;
    // const { id, title } = qs.parse(search.splice(1));
    // const result = data.find((ele) => {
    //   return ele.id == id;
    // });
    console.log(search);
    return (
      <div>
        <ul>
          {/* <li>ID:{id}</li>
          <li>Title:{title}</li>
          <li>Content:{result.content}</li> */}
        </ul>
      </div>
    );
  }
}
