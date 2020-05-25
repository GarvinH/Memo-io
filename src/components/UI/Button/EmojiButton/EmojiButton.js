import React from 'react';
import PropTypes from 'prop-types'

const emojiButton = (props) => (
    <button className={props.className} onClick={props.clicked} 
    style={{ border: "none", background: "none" }} title={props.title}>
        <span role="img" aria-label={props.label ? props.label : ""}>{props.emoji}</span>
    </button>
)

emojiButton.propTypes = {
    clicked: PropTypes.func.isRequired,
}

export default emojiButton;