import React from "react";
let a = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];
class Todos extends React.Component {
  state = {
    name: "",
    description: "",
    list: [],
    flag: false
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list
    });
  }
  handleClickonDelete = index => {
    console.log(index);
    this.state.list.splice(index, 1);
    this.setState({
      list: this.state.list
    });
  };
  // handleClickonEdit = () => {
  //   this.setState({
  //     flag: true
  //   });
  // };

  //edit Option

  handleChangetitle = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  onSubmit = (e, index) => {
    e.preventDefault();
    let b = this.state.list;
    b[index].name = this.state.name.toUpperCase();
    b[index].description = this.state.description;
    this.setState({
      name: "",
      description: "",
      list: b,
      flag: false
    });
  };

  showEditForm = () => {
    this.setState({
      flag: true
    });
  };

  render() {
    return (
      <ul className="list1">
        {this.props.list.map((data, index) => (
          <li className="lis" key={index}>
            <b>{data.name}</b>
            ---> {data.description}
            <div className="hideButton">
              <input
                type="button"
                onClick={() => this.showEditForm()}
                value="Edit"
              />
              <input
                type="button"
                value="Delete"
                onClick={e => this.handleClickonDelete(index)}
              />
            </div>
            {this.state.flag && (
              <div>
                <form onSubmit={e => this.onSubmit(e, index)}>
                  <input
                    type="text"
                    value={this.state.name}
                    placeholder="Enter Title"
                    onChange={this.handleChangetitle}
                  />
                  <input
                    type="text"
                    placeholder="Enter Description"
                    value={this.state.description}
                    onChange={this.handleChangeDescription}
                  />
                  <input type="submit" value="Save" />
                </form>
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  }
}
export default Todos;
