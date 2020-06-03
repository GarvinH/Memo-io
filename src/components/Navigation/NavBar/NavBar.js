import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../../store/actions'
import classes from './NavBar.module.css'
import NavItems from './NavItems/NavItems'
import Logo from '../../UI/Logo/Logo'
import ImageButton from '../../UI/Button/ImageButton/ImageButton'

import plus from '../../../assets/plus.png'
import pallete from '../../../assets/pallete.png'

import Aux from '../../../hoc/Aux'

const NavBar = ({zIndex, addNote, updateModal}) => {
    console.log(addNote)
    return (
        <header className={classes.NavBar} style={{zIndex: zIndex+2}}>
            <div className={classes.Logo}>
                <Logo />
                <h1>Memo.io</h1>
            </div>
            <div className={classes.Button}>
                <Aux>
                    <ImageButton image={plus} alt="plus icon" clicked={addNote} label="Add note" title="Add note"/>
                    <ImageButton image={pallete} alt="pallete icon" clicked={() => updateModal(3)} label="Change note colour" title="Change note colour" />
                </Aux>
            </div>
            <nav>
                <NavItems />
            </nav>
        </header >
    )
}

const mapStateToProps = state => {
    return {
        zIndex: state.currentZIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNote: () => dispatch({type: actionTypes.addNote}),
        updateModal: (newState) => dispatch({type: actionTypes.updateModal, newModalState: newState})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);