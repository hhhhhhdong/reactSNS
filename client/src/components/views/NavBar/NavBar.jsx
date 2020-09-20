import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../_actions/user_actions";
import { Navbar, NavbarItem } from "../../FormStyle";

const NavBar = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickHandler = (event) => {
    event.preventDefault();
    const body = {
      _id: user.userInfo._id,
    };
    dispatch(logoutUser(body)).then((response) => {
      if (!response.payload.logged) {
        localStorage.setItem("token", "");
        localStorage.setItem("logged", false);
        props.history.push("/");
      } else {
        alert("Log Out Failed");
      }
    });
  };
  const logged = localStorage.getItem("logged") === "true" ? true : false;
  if (!logged) {
    return (
      <Navbar>
        <NavbarItem islogo>
          <Link to="/">home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/login">login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/register">register</Link>
        </NavbarItem>
      </Navbar>
    );
  } else {
    return (
      <Navbar>
        <Link to="/">home</Link>
        <Link to="/mypage">mypage</Link>
        <Link to="/write">write</Link>
        <button onClick={onClickHandler}>logout</button>
      </Navbar>
    );
  }
};

export default withRouter(NavBar);
