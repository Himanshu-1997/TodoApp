import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todos from "./todos-component";
import Createtodolist from "./createtodolist-component";

class App extends React.Component {
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
          <Createtodolist />
          <Todos />
        </div>
      </div>
    );
  }
}
export default App;
