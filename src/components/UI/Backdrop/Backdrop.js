import React from 'react'
import classes from './Backdrop.module.css'

const backdrop = (props) => (
    <div className={classes.backdrop} style={props.style}></div>
)

export default backdrop;