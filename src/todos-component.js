import React from "react";
let a = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
class Todos extends React.Component {
  render() {
    return (
      <ul className="list1">
        {this.props.list.map(data => (
          <li>
            <i>
              <b>{data.name}</b>
            </i>
            --> {data.description}
          </li>
        ))}
      </ul>
    );
  }
}
export default Todos;
