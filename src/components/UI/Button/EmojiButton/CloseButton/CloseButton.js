import React from 'react';
import EmojiButton from '../EmojiButton'
import classes from './CloseButton.module.css';

const closeButton = (props) => (
    <div className={classes.closeButton}>
        <EmojiButton clicked={props.clicked} label="close button" emoji="&#10060;" />
    </div>
)

export default closeButton