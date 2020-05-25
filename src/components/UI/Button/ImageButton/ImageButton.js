import React from 'react';
import classes from './ImageButton.module.css'
import PropTypes from 'prop-types'

const imageButton = (props) => (
    <div className={classes.Button}>
        <button onClick={props.clicked} aria-label={props.label} title={props.title}>
            <img src={props.image} alt={props.alt} aria-hidden="true"/>
        </button>
    </div>
)

imageButton.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
}

export default imageButton;