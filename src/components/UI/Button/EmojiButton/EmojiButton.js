import React from 'react';
import PropTypes from 'prop-types'

const emojiButton = (props) => (
    <div onClick={props.clicked} ><span role="img" aria-label={props.label?props.label:""}>{props.emoji}</span></div>
)

emojiButton.propTypes = {
    clicked: PropTypes.func.isRequired,
}

export default emojiButton;