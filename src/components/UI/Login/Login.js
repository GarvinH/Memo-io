import React from "react";
import classes from "./Login.module.css";
import Aux from "../../../hoc/Aux";
import axios from "axios";
import NoteContext from "../../../context/NoteContext";
import ErrorText from "../../UI/ErrorText/ErrorText";

class Login extends React.Component {
  static contextType = NoteContext;

  state = {
    email: "",
    password: "",
    err: {},
  };

  submit = (event) => {
    event.preventDefault();
    const data = new URLSearchParams();
    data.append("username", event.target.username.value);
    data.append("password", event.target.password.value);
    axios
      .post("/login", data, { withCredentials: true })
      .then((res) => {
        this.context.updateNotes(res.data);
        this.context.updateModal(0);
        this.context.authenticate();
      })
      .catch((err) => {
        this.setState({ err: err.response });
      });
  };

  render() {
    return (
      <Aux>
        <h1 className={classes.title}>Login</h1>
        <hr className={classes.hr}></hr>
        <form
          className={classes.login}
          onSubmit={(event) => this.submit(event)}
        >
          <label htmlFor="email">
            Email:
            <input
              type="email"
              placeholder="Enter your email here"
              name="username"
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </label>

          <label htmlFor="password">
            Password:
            <input
              type="password"
              placeholder="Enter your password here"
              name="password"
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
          </label>
          <ErrorText
            email={this.state.email}
            password={this.state.password}
            err={this.state.err}
          />

          <input type="submit" value="Submit" />
        </form>
      </Aux>
    );
  }
}

export default Login;
