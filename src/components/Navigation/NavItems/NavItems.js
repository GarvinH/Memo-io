import React, { useContext } from "react";
import axios from "axios";
import NavItem from "./NavItem/NavItem";
import classes from "./NavItems.module.css";
import NoteContext from "../../../context/NoteContext";

const NavItems = () => {
  const noteContext = useContext(NoteContext);

  const unauthenticatedNav = (
    <ul className={classes.NavItems}>
      <NavItem clicked={() => noteContext.updateModal(1)} ariaLabel="Login">
        LOGIN
      </NavItem>
      <NavItem clicked={() => noteContext.updateModal(2)} ariaLabel="Sign up">
        SIGN UP
      </NavItem>
    </ul>
  );

  const authenticatedNav = (
    <ul className={classes.NavItems}>
      <NavItem clicked={() => {axios.post("/save", noteContext.notes, {withCredentials: true})}} ariaLable="Save">
        SAVE
      </NavItem>
      <NavItem clicked={() => {axios.post("/logout", noteContext.notes, {withCredentials: true})}} ariaLable="Log out">
        LOG OUT
      </NavItem>
    </ul>
  );
  return noteContext.isAuthenticated ? authenticatedNav : unauthenticatedNav;
};

export default NavItems;
