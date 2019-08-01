import React from "react";
import Todos from "./todos-component";
import Createtodolist from "./createtodolist-component";

class App extends React.Component {
  state = {
    list: []
  };
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>
            <u>TODO APPLICATION</u>
          </h1>
        </div>
        <div className="bodypart">
          <h1>CREATE TODO LIST</h1>
          <h1>LIST OF TODO ITEMS</h1>
        </div>
        <div className="bodypart2">
          <Createtodolist
            list={this.state.list}
            setList={d =>
              this.setState({
                list: d
              })
            }
          />
          <Todos list={this.state.list} />
        </div>
      </div>
    );
  }
}
export default App;
