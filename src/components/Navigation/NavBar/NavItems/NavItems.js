import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions'
import NavItem from './NavItem/NavItem'
import classes from './NavItems.module.css'

const NavItems = ({updateModal}) => {

    return (
    <ul className={classes.NavItems}>
        <NavItem clicked={()=> updateModal(1)} ariaLabel="Login">LOGIN</NavItem>
        <NavItem clicked={()=> updateModal(2)} ariaLabel="Sign up">SIGN UP</NavItem>
    </ul>
)}

const mapDispatchToProps = dispatch => {
    return {
        updateModal: (newState) => dispatch({type: actionTypes.updateModal, newModalState: newState})
    }
}

export default connect(null, mapDispatchToProps)(NavItems);