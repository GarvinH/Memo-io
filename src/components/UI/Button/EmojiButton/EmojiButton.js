import React from 'react';
import PropTypes from 'prop-types'

const emojiButton = ({clicked, className, label, emoji, title}) => (
    <button className={className} onClick={clicked} 
    style={{ border: "none", background: "none" }} title={title}>
        <span role="img" aria-label={label === undefined ? label : ""}>{emoji}</span>
    </button>
)

emojiButton.propTypes = {
    clicked: PropTypes.func.isRequired,
    className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    label: PropTypes.string,
    emoji: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default emojiButton;