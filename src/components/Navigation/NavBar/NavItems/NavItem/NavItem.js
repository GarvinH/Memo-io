import React from 'react';
import classes from './NavItem.module.css'

const navItem = (props) => (
    <li className={classes.NavItem} onClick={props.clicked}>
        <div>{props.children}</div>
    </li>
)

export default navItem;