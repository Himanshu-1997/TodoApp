import React from "react";

let a = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

class Createtodolist extends React.Component {
  state = {
    name: "",
    description: ""
  };
  handleChangeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let b = {
      name: "",
      description: ""
    };
    b.name = this.state.name.toUpperCase();
    b.description = this.state.description;
    a.push(b);
    localStorage.setItem("items", JSON.stringify(a));
    this.props.setList([...this.props.list, b]);
    this.setState({
      name: "",
      description: ""
    });
  };

  render() {
    return (
      <div>
        <form className="Form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>
              <b>Enter Title:-</b>
            </label>
            <textarea
              // type="text"
              rows="2"
              cols="47"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </div>
          <div className="form-group">
            <label>
              <b>Enter Description:-</b>
            </label>
            <textarea
              value={this.state.description}
              rows="5"
              cols="40"
              onChange={this.handleChangeDescription}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="create-todo" className="btn-color" />
          </div>
        </form>
      </div>
    );
  }
}

export default Createtodolist;
