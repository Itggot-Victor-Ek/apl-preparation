import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./home.jsx"
import BreadPage from "./bread.jsx"
import './router.css'
import logo from './ICA-logotyp.png';
import SingleBreadPage from './breadPage.jsx'

const SingleBreadLink = () => <SingleBreadPage/>;
const Index = () => <Home/>;
const Bread = () => <BreadPage/>;
const Users = () => <h2>Users</h2>;

const AppRouter = () => (
  <Router>
    <div>
        <nav className="nav--standard">
            <div className="container--logo" >
                <img src={logo} className="logo logo--mini" alt="logo" />
            </div>
            <ul className="ul--nav">
                <li>
                    <Link className="router-link" to="/">Hem</Link>
                </li>
                <li>
                    <Link className="router-link" to="/bread/">Bröö</Link>
                </li>
                <li>
                    <Link className="router-link" to="/users/">Priser på Bröö</Link>
                </li>
            </ul>
        </nav>

            <Route path="/" exact component={Index} />
            <Route path="/bread/" exact component={Bread} />
            <Route path="/users/" component={Users} />
            <Route path="/bread/:bread" component={SingleBreadLink} />
    </div>
  </Router>
);

export default AppRouter;