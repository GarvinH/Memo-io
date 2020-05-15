import React, { Component } from 'react';
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
import CloseButton from '../../UI/Button/CloseButton/CloseButton'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || this.props.children !== nextProps.children
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} style={this.props.style} clicked={() => this.props.updateModal(0)} />
                <div className={classes.modal} style={{ ...this.props.style, transform: (this.props.show === 0) ? "translateY(-100vh)" : "translateY(0)" }}>
                    <CloseButton clicked={() => this.props.updateModal(0)} />
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;