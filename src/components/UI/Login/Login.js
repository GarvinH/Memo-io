import React from "react";
import classes from "./Login.module.css";
import Aux from "../../../hoc/Aux";
import axios from "axios";
import ErrorText from "../../UI/ErrorText/ErrorText";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    err: {},
    update_err: false,
  };

  submit = (event) => {
    event.preventDefault();
    if (!event.target.email.value || !event.target.password.value) {
      this.setState({ err: "Email or password not provided", update_err: true });
    } else {
      const data = new URLSearchParams();
      data.append("username", event.target.email.value);
      data.append("password", event.target.password.value);
      axios
        .post("/login", data, { withCredentials: true })
        .then((res) => {
          this.props.updateNotes(res.data);
          this.props.updateModal(0);
          this.props.authenticate();
        })
        .catch((err) => {
          console.log(err.response)
          this.setState({ err: err.response, update_err: true });
        });
    }
  };

  disable_update_err = () => {
    this.setState({ update_err: false });
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
              name="email"
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
            {...this.state}
            disable_update_err={this.disable_update_err}
          />

          <input type="submit" value="Submit" />
        </form>
      </Aux>
    );
  }
}

export default Login;
