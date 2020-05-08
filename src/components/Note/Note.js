import React from 'react';
import classes from './Note.module.css'
import { Rnd } from 'react-rnd'

import { ReactComponent as Resize } from '../../assets/resize.svg'

const note = (props) => (
    <Rnd default={{
        x: 200,
        y: 200,
        width: 200,
        height: 200,
        minHeight: 100,
        minWidth: 100
    }}
    className={classes.Note}
    style={{ backgroundColor: props.color }}>
        <div>
            {props.text}
            asdf
            <div onClick={props.delete} className={classes.closeButton}><span role="img" aria-label="close button">&#10060;</span></div>
            <div>
                <Resize className={classes.resizeButton} />
            </div>
        </div>
    </Rnd>
)

export default note;