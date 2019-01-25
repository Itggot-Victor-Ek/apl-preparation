import React from "react";
import Home from "./home.jsx"
import Bread from "./bread.jsx"
import Search from "./search.jsx"
import ChangePrice from "./changePrice"
import ChangePriceSearch from "./changePriceSearch"
import "./nav.sass"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/bread">Home</Link>
          </li>
          <li>
            <Link to="/search/">Search</Link>
          </li>
          <li>
            <Link to="/changeDatPrice/">Change Price</Link>
          </li>
        </ul>
      </nav>

      <Route path="/bread" exact component={Home} />
      <Route path="/bread/:id" component={Bread} />
      <Route path="/search/" component={Search} />
      <Route path="/changeDatPrice/" component={ChangePriceSearch} />
      <Route path="/changePrice/:id" component={ChangePrice} />
    </div>
  </Router>
);

export default AppRouter;
