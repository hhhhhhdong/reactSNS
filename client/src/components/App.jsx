import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyle, Contaniner } from "./FormStyle";

import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NavBar from "./views/NavBar/NavBar";
import WritePage from "./views/WritePage/WritePage";
import MyPage from "./views/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Contaniner>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/write" component={Auth(WritePage, true)} />
          <Route exact path="/mypage" component={Auth(MyPage, true)} />
        </Switch>
      </Contaniner>
    </BrowserRouter>
  );
}

export default App;
