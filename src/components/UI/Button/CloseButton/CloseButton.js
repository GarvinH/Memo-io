import React from 'react';
import classes from './CloseButton.module.css'

const closeButton = (props) => (
    <div onClick={props.clicked} className={classes.closeButton}><span role="img" aria-label="close button">&#10060;</span></div>
)

export default closeButton;