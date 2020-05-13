import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = (props) => (
    props.show===0?null:<div className={classes.backdrop} style={props.style}
    onClick={props.clicked}></div>
)

export default backdrop;