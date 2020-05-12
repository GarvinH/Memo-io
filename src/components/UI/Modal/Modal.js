import React from 'react';
import classes from './Modal.module.css'

const modal = (props) => (
    <div className={classes.modal} style={props.style}>
        {props.children}
    </div>
)

export default modal;