import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions'
import classes from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'
import Aux from '../../../hoc/Aux'
import CloseButton from '../Button/EmojiButton/CloseButton/CloseButton'
import PropTypes from 'prop-types'
import FocusTrap from 'focus-trap-react'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.children !== nextProps.children
    }

    render() {
        return (

            <Aux>
                <Backdrop show={this.props.modalState}  clicked={() => this.props.updateModal(0)} />
                <FocusTrap active={this.props.modalState} focusTrapOptions={{clickOutsideDeactivates: true}}>
                    <div className={classes.modal} style={{ zIndex: this.props.zIndex+100, transform: (this.props.modalState === 0) ? "translateY(-100vh)" : "translateY(0)"}}>
                        <div className={classes.closeButton}>
                            <CloseButton clicked={() => this.props.updateModal(0)} />
                        </div>
                        {this.props.children}
                    </div>
                </FocusTrap>
            </Aux >

        )
    }
}

Modal.propTypes = {
    modalState: PropTypes.number.isRequired,
    zIndex: PropTypes.number.isRequired
}

const mapStateToProps = state => {
    return {
        zIndex: state.currentZIndex,
        modalState: state.modalState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateModal: (newState) => dispatch({type: actionTypes.updateModal, newModalState: newState})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);