import React from "react";

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
    e.preventDefault;
    this.setState({
      name: "",
      description: ""
    });
  };

  render() {
    return (
      <form className="Form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>
            <b>Enter Title:-</b>
          </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
        </div>
        <div className="form-group">
          <label>
            <b>Enter Description:-</b>
          </label>
          <input
            type="textarea"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="create-todo" className="btn-color" />
        </div>
      </form>
    );
  }
}

export default Createtodolist;
