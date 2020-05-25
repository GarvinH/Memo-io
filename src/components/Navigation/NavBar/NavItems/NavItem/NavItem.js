import React from 'react';
import classes from './NavItem.module.css'

const navItem = (props) => (
    <li className={classes.NavItem} >
        <button aria-label={props.ariaLable? props.ariaLable : null} onClick={props.clicked}>{props.children}</button>
    </li>
)

export default navItem;