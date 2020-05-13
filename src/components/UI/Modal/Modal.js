import React from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'

const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} style={props.style} clicked={()=>props.updateModal(0)}/>
        <div className={classes.modal} style={{...props.style, transform: (props.show===0)? "translateY(-100vh)" : "translateY(0)"}}>
            {props.children}
        </div>
    </Aux>
)

export default modal;