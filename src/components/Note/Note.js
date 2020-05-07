import React from 'react';
import classes from './Note.module.css'

const note = (props) => (
    <div draggable className={classes.Note} 
    style={{left: props.left, top: props.top, width: props.width+"px", height: props.height+"px", backgroundColor: props.color}}>
        {props.text}
    </div>
)

export default note;