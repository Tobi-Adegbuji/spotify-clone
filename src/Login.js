import React from "react";
import "./Login.css";
import {loginUrl} from "./spotify"

function Login() {
  return(
  <div className="login">
    <img src="https://img.icons8.com/fluent/240/000000/spotify.png" alt=""></img>
    <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
  </div>
  );
}

export default Login;
