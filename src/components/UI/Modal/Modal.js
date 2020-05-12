import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const modal = (props) => (
    <Aux>
        <Backdrop style={props.style} />
        <div className={classes.modal} style={props.style}>
            {props.children}
        </div>
    </Aux>
)

export default modal;