import React from "react";
import classes from "./Registration.module.css";
import Aux from "../../../hoc/Aux";
import axios from "axios";
import NoteContext from "../../../context/NoteContext";
import { noteFilterer } from '../../../functions/noteFunctions'

const register = (event, updateAuthenticated, notes) => {
  event.preventDefault();
  const data = new URLSearchParams();
  data.append("username", event.target.username.value);
  data.append("password", event.target.password.value);
  data.append("notes", JSON.stringify(notes));
  axios.post("/register", data, { withCredentials: true }).then((res) => {});
};

const Registsration = (props) => {
  const noteContext = React.useContext(NoteContext);

  return (
    <Aux>
      <h1 className={classes.title}>Sign Up</h1>
      <hr></hr>
      <form
        onSubmit={(event) =>
          register(event, props.updateAuthenticated, noteFilterer(noteContext.notes))
        }
      >
        <div className={classes.signup}>
          <label htmlFor="email">
            Email:
            <input type="email" placeholder="Your email here" name="username" />
          </label>
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
        <div className={classes.signup}></div>
        <input className={classes.submit} type="submit" value="Submit" />
      </form>
    </Aux>
  );
};

export default Registsration;
