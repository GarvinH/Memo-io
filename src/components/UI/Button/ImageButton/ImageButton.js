import React from 'react';
import classes from './ImageButton.module.css'
import PropTypes from 'prop-types'

const imageButton = (props) => (
    <div className={classes.Button}>
        <img src={props.image} alt={props.alt} onClick={props.clicked} />
    </div>
)

imageButton.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    clicked: PropTypes.func.isRequired,
}

export default imageButton;