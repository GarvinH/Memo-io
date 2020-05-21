import React from 'react';
import EmojiButton from '../EmojiButton'
import classes from './CloseButton.module.css';
import PropTypes from 'prop-types'

const closeButton = (props) => (
    <div className={classes.closeButton}>
        <EmojiButton clicked={props.clicked} label="close button" emoji="&#10060;" />
    </div>
)

closeButton.propTypes = {
    clicked: PropTypes.func.isRequired,
}

export default closeButton