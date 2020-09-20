import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_actions";
import { withRouter } from "react-router-dom";
import { Button, Input, Form, Label, InputContainer } from "../../FormStyle";

const LoginPage = (props) => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.success) {
        localStorage.setItem("logged", true);
        localStorage.setItem("token", response.payload.token);
        props.history.push("/");
      } else {
        alert("err");
      }
    });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="text" value={Email} onChange={onEmailHandler} />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
        </InputContainer>
        <Button>login</Button>
      </Form>
    </div>
  );
};

export default withRouter(LoginPage);
