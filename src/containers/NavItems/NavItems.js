import React from "react";
import NavItem from "../../components/Navigation/NavItem/NavItem";
import classes from "./NavItems.module.css";
import NoteContext from "../../context/NoteContext";

class NavItems extends React.Component {
  static contextType = NoteContext;

  state = {
    isAuthenticated: false,
  }

  authenticate = () => {
      this.setState({isAuthenticated: true})
  }

  render() {
    return (
      <ul className={classes.NavItems}>
        <NavItem clicked={() => this.context.updateModal(1)} ariaLabel="Login">
          LOGIN
        </NavItem>
        <NavItem clicked={() => this.context.updateModal(2)} ariaLabel="Sign up" updateAuthenticated={this.authenticate()}>
          SIGN UP
        </NavItem>
      </ul>
    );
  }
}

export default NavItems;
