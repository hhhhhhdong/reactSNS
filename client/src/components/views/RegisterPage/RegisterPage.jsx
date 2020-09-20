import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_actions";
import { withRouter } from "react-router-dom";
import { Button, Input, Form, Label } from "../../FormStyle";

const RegisterPage = (props) => {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const onNameHandler = (event) => {
    setName(event.target.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert("비밀번호를 확인해주세요");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/login");
      } else {
        alert("fail to sing up");
      }
    });
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="email">Email</Label>
        <Input type="text" value={Email} onChange={onEmailHandler} />

        <Label htmlFor="name">Name</Label>
        <Input type="text" value={Name} onChange={onNameHandler} />

        <Label htmlFor="password">Password</Label>
        <Input type="password" value={Password} onChange={onPasswordHandler} />

        <Label htmlFor="password">Confirm Password</Label>
        <Input
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />

        <Button>Sign up</Button>
      </Form>
    </div>
  );
};

export default withRouter(RegisterPage);
