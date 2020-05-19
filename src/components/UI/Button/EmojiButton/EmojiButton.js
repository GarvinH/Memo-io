import React from 'react';

const emojiButton = (props) => (
    <div onClick={props.clicked} ><span role="img" aria-label={props.label?props.label:""}>{props.emoji}</span></div>
)

export default emojiButton;