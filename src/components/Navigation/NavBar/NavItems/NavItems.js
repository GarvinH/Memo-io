import React, { useContext } from 'react';
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.css'
import NoteContext from '../../../../context/NoteContext'

const NavItems = (props) => {
    const noteContext = useContext(NoteContext)

    return (
    <ul className={classes.NavItems}>
        <NavItem clicked={()=>noteContext.updateModal(1)} ariaLabel="Login">LOGIN</NavItem>
        <NavItem clicked={()=>noteContext.updateModal(2)} ariaLabel="Sign up">SIGN UP</NavItem>
    </ul>
)}

export default NavItems;