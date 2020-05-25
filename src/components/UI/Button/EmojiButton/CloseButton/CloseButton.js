import React from 'react';
import EmojiButton from '../EmojiButton'
import classes from './CloseButton.module.css';
import PropTypes from 'prop-types'

const closeButton = (props) => (
    <EmojiButton className={classes.closeButton} clicked={props.clicked} 
    label="Close modal" emoji="&#10060;" title="Close modal"/>
)

closeButton.propTypes = {
    clicked: PropTypes.func.isRequired,
}

export default closeButton