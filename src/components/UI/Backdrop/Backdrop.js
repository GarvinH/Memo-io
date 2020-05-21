import React from 'react'
import classes from './Backdrop.module.css'
import PropTypes from 'prop-types'

const backdrop = (props) => (
    props.show===0?null:<div className={classes.backdrop} style={props.style}
    onClick={props.clicked}></div>
)

backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    style: PropTypes.object,
    clicked: PropTypes.func.isRequired,
}

export default backdrop;