import React from 'react';
import classes from './Note.module.css'

import { ReactComponent as Resize } from '../../assets/resize.svg'

const note = (props) => (
    <div className={classes.Note}
        style={{ left: props.left, top: props.top, width: props.width + "px", height: props.height + "px", backgroundColor: props.color }}>
        {props.text}
        <div onClick={props.delete} className={classes.closeButton}><span role="img" aria-label="close button">&#10060;</span></div>
        <div draggable onDrag={props.resize}>
            <Resize className={classes.resizeButton} />
        </div>
    </div>
)

export default note;