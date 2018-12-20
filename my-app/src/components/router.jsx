import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../css/router.css'
import MainPage from "../views/mainPage"
import AboutPage from "../views/aboutPage"
import UserPage from "../views/usersPage"
import AddUser from '../views/addUserPage'
import UserFailed from '../views/userFailed'
import DeleteUser from '../views/deleteUser'


const UserAdd = () => <AddUser></AddUser>;
const Index = () => <MainPage></MainPage>;
const About = () => <AboutPage></AboutPage>;
const Users = () => <UserPage></UserPage>;
const BadUser = () => <UserFailed></UserFailed>;
const UserDeleted = () => <DeleteUser></DeleteUser>

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul className=" ul ul--navbar">
          <li className=" li li--navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className=" li li--navbar-item">
            <Link to="/about/">About</Link>
          </li>
          <li className=" li li--navbar-item">
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" exact component={Users} />
      <Route path="/users/add" exact component={UserAdd} />
      <Route path="/users/failed" exact component={BadUser}/>
      <Route path="/users/:id" component={UserDeleted}/>

    </div>
  </Router>
);

export default AppRouter;
