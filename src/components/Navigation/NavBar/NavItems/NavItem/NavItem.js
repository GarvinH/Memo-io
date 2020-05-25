import React from 'react';
import classes from './NavItem.module.css'
import PropTypes from 'prop-types'

const navItem = (props) => (
    <li className={classes.NavItem} >
        <button aria-label={props.ariaLable? props.ariaLable : null} onClick={props.clicked}>{props.children}</button>
    </li>
)

navItem.propTypes = {
    ariaLable: PropTypes.string,
    clicked: PropTypes.func.isRequired
}

export default navItem;