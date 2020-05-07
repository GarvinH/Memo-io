import React from 'react';
import classes from './Button.module.css'

const button = (props) => (
    <div className={classes.Button}>
        <img src={props.image} alt={props.alt} onClick={props.clicked} />
    </div>
)

export default button;