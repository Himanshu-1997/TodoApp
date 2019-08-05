import React from "react";
let a = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
class Todos extends React.Component {
  state = {
    list: []
  };
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    this.setState({
      list: nextProps.list
    });
  }
  handleClick = index => {
    console.log(index);
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list
    });
  };
  render() {
    return (
      <ul className="list1">
        {this.props.list.map((data, index) => (
          <li key={index}>
            <b>{data.name}</b>
            --> {data.description}
            <div className="hideButton">
              <input type="button" value="Edit" />
              <input
                type="button"
                value="Delete"
                onClick={e => this.handleClick(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
export default Todos;
