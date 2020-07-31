import React from "react";
import classes from "./Login.module.css";
import Aux from "../../../hoc/Aux";
import axios from "axios";
import ErrorText from "../../UI/ErrorText/ErrorText";
import Spinner from "../Spinner/Spinner";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    err: {},
    update_err: false,
    loading: false,
  };

  submit = (event) => {
    event.preventDefault();
    const data = new URLSearchParams();
    data.append("username", this.state.email);
    data.append("password", this.state.password);
    this.setState({ loading: true });
    axios
      .post("/login", data, { withCredentials: true })
      .then((res) => {
        this.props.updateNotes(res.data);
        this.props.updateModal(0);
        this.props.authenticate();
      })
      .catch((err) => this.setState({ err: err.response, update_err: true }))
      .finally(() => this.setState({ loading: false }));
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
          <Spinner loading={this.state.loading} />
        </form>
      </Aux>
    );
  }
}

export default Login;
