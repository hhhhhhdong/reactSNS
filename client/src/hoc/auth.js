import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_actions";

export default function (SpecificComponent, option, adminRoute = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      const logged = localStorage.getItem("logged") === "true" ? true : false;
      const token = localStorage.getItem("token");

      const body = { token };
      dispatch(auth(body));

      if (!logged) {
        //로그인 하지 않은 상태
        if (option) {
          props.history.push("/login");
        }
      } else {
        //로그인 한상태
        if (adminRoute && !response.payload.isAdmin) {
          props.history.push("/");
        }
        if (option === false) {
          props.history.push("/");
        }
      }
    }, []);
    return <SpecificComponent {...props} />; //user={user}
  }
  return AuthenticationCheck;
}

// null : 아무나 출입가능
// true : 로그인한 회원만 출입가능
// false : 로그인한 유저는 출입 불가능한 페이지
