import React from "react";
import Home from "./home.jsx"
import Bread from "./bread.jsx"
import "./nav.sass"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/bread">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/bread" exact component={Home} />
      <Route path="/bread/:id" component={Bread} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

export default AppRouter;
