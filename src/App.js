import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todos from "./todos-component";
import Createtodolist from "./createtodolist-component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>TODO APPLICATION</h1>
          {/* <Link to="/">Todo List</Link> */}
          <Link to="/create">Create ToDo List</Link>
          {/* <Route path="/" exact component={Todos} /> */}
          <Route path="/create" component={Createtodolist} />
        </div>
      </Router>
    );
  }
}
export default App;
