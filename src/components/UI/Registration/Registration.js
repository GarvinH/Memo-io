import React from "react";
import classes from "./Registration.module.css";
import Aux from "../../../hoc/Aux";
import axios from "axios";
import NoteContext from "../../../context/NoteContext";
import { noteFilterer } from "../../../functions/noteFunctions";
import ErrorText from "../../UI/ErrorText/ErrorText";
import Spinner from "../Spinner/Spinner"

class Registsration extends React.Component {
  static contextType = NoteContext;

  state = {
    email: "",
    password: "",
    confirm_password: "",
    err: {},
    update_err: false,
    loading: false,
  };

  register = (event) => {
    event.preventDefault();
    if (this.state.password === this.state.confirm_password) {
      const data = new URLSearchParams();
      data.append("username", this.state.email);
      data.append("password", this.state.password);
      data.append("notes", JSON.stringify(noteFilterer(this.props.notes)));
      this.setState({loading: true})
      axios
        .post("/register", data, { withCredentials: true })
        .then((res) => {
          this.props.updateModal(0);
          this.props.authenticate();
        })
        .catch((err) => this.setState({ err: err.response, update_err: true }))
        .finally(() => this.setState({loading: false}));
    } else {
      this.setState({
        err: "Passwords do not match. Please fix and try again.",
        update_err: true,
      });
    }
  };

  disable_update_err = () => {
    this.setState({ update_err: false });
  };

  render() {
    return (
      <Aux>
        <h1 className={classes.title}>Sign Up</h1>
        <hr></hr>
        <form
          style={{ height: "100%" }}
          onSubmit={(event) => this.register(event)}
        >
          <div className={classes.signup}>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                placeholder="Your email here"
                name="email"
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
              />
            </label>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                placeholder="Your password here"
                name="password"
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
              />
            </label>

            <label htmlFor="confirm">
              Confirm Password:
              <input
                type="password"
                placeholder="Confirm your password here"
                name="confirm"
                onChange={(event) =>
                  this.setState({ confirm_password: event.target.value })
                }
              />
            </label>
            <ErrorText
              {...this.state}
              disable_update_err={this.disable_update_err}
            />
            <input className={classes.submit} type="submit" value="Submit" />
            <Spinner loading={this.state.loading} />
          </div>
          <div className={classes.signup}>
            <a href="/auth/google" role="button">Sign in with Google</a>
            <a href="/auth/facebook" role="button">Sign in with Facebook</a>
          </div>
        </form>
      </Aux>
    );
  }
}

export default Registsration;
