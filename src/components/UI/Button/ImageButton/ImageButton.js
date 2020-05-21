import React from 'react';
import classes from './ImageButton.module.css'

const imageButton = (props) => (
    <div className={classes.Button}>
        <img src={props.image} alt={props.alt} onClick={props.clicked} />
    </div>
)

export default imageButton;