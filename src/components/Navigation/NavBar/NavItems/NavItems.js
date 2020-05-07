import React from 'react';
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.css'

const navItems = (props) => (
    <ul className={classes.NavItems}>
        <NavItem>LOGIN</NavItem>
        <NavItem>SIGN UP</NavItem>
    </ul>
)

export default navItems;