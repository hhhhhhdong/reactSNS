import axios from "axios";
import {
  LOGIN_USER,
  AUTH_USER,
  REGISTER_USER,
  USER_POST,
  USER_LOGOUT,
} from "./types";
import { USER_SERVER } from "../components/Config";

export function auth(token) {
  const request = axios
    .post(`${USER_SERVER}/auth`, token)
    .then((respons) => respons.data);
  return {
    type: AUTH_USER,
    payload: request,
  };
}

export function loginUser(dataToSubmit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSubmit, { withCredentials: true })
    .then((respons) => respons.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataToRegister) {
  const request = axios
    .post(`${USER_SERVER}/register`, dataToRegister)
    .then((respons) => respons.data);
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function userPost(dataToPost) {
  const request = axios
    .post(`${USER_SERVER}/addpost`, dataToPost)
    .then((respons) => respons.data);
  return {
    type: USER_POST,
    payload: request,
  };
}

export function logoutUser(dataToPost) {
  const request = axios
    .post(`${USER_SERVER}/logout`, dataToPost)
    .then((respons) => respons.data);
  return {
    type: USER_LOGOUT,
    payload: request,
  };
}
