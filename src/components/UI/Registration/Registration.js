import React from "react";
import classes from "./Registration.module.css";
import Aux from "../../../hoc/Aux";
import axios from "axios";

const register = (event) => {
  event.preventDefault();
  console.log(event.target.name.value);
  axios.post("/register", {
    name: event.target.name.value,
    email: event.target.email.value,
    password: event.target.password.value,
    confirm: event.target.confirm.value,
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

        <label htmlFor="email">
          Email:
          <input type="email" placeholder="Your email here" name="email" />
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
