import React from "react";
import classes from "./Registration.module.css";
import Aux from "../../../hoc/Aux";
import axios from "axios";

const register = (event) => {
  event.preventDefault();
  const data = new URLSearchParams()
  data.append('username', event.target.username.value)
  data.append('password', event.target.password.value)
  axios.post("/register", data, {withCredentials: true}).then(res => {
    console.log(res)
  });
};

const registsration = () => (
  <Aux>
    <h1 className={classes.title}>Sign Up</h1>
    <hr></hr>
    <form onSubmit={(event) => register(event)}>
      <div className={classes.signup}>
        <label htmlFor="name">
          Name:
          <input type="text" placeholder="Your name here" name="name" />
        </label>

        <label htmlFor="username">
          Email:
          <input type="email" placeholder="Your email here" name="username" />
        </label>
      </div>
      <div className={classes.signup}>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            placeholder="Your password here"
            name="password"
          />
        </label>

        <label htmlFor="confirm">
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm your password here"
            name="confirm"
          />
        </label>
      </div>
      <input className={classes.submit} type="submit" value="Submit" />
    </form>
  </Aux>
);

export default registsration;
