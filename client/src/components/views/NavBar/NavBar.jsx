import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../_actions/user_actions";
import {
  Navbar,
  NavbarItem,
  LogoutButton,
  NavbarContainer,
} from "../../FormStyle";

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
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };
  const logged = localStorage.getItem("logged") === "true" ? true : false;
  if (!logged) {
    return (
      <Navbar>
        <NavbarContainer>
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/register">Register</Link>
          </NavbarItem>
        </NavbarContainer>
      </Navbar>
    );
  } else {
    return (
      <Navbar>
        <NavbarContainer>
          <NavbarItem>
            <Link to="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/mypage">MyPage</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/write">Write</Link>
          </NavbarItem>
          <NavbarItem>
            <LogoutButton onClick={onClickHandler}>Logout</LogoutButton>
          </NavbarItem>
        </NavbarContainer>
      </Navbar>
    );
  }
};

export default withRouter(NavBar);
