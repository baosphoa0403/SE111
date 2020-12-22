import React from "react";
import {NavLink} from "react-router-dom"
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
            <li className="nav-item active ">
              <NavLink exact activeStyle={{color: "red"}} className="nav-link  " to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>    
            </li>
            <li className="nav-item">
              <NavLink exact activeStyle={{color: "red"}}  className="nav-link " to="/listMovie">
                ListMovie
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeStyle={{color: "red"}}  className="nav-link " to="/detail">
                detail
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeStyle={{color: "red"}}  className="nav-link " to="/signIn">
                sign in
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeStyle={{color: "red"}}  className="nav-link " to="/signUp">
                sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
