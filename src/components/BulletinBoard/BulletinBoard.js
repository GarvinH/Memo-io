import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
import classes from './BulletinBoard.module.css';
import Note from '../Note/Note'
import PropTypes from 'prop-types'

const bulletinBoard = ({notes, changed, updateZ, deleted}) => {

    const notesArray = notes.map((note, index) => {
        return <Note key={note.iden} color={note.color} text={note.text} zIndex={note.zIndex}
            deleted={() => deleted(index)} changed={(event) => changed(event.target.value, index)}
            updateZ={() => updateZ(index)}></Note>
    })

    return (
        <div className={classes.BulletinBoard}>
            {notesArray}
        </div>
    );

}

bulletinBoard.propTypes = {
    notes: PropTypes.array.isRequired,
    deleted: PropTypes.func.isRequired,
    changed: PropTypes.func.isRequired,
    updateZ: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return {
        notes: [...state.notes]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleted: (ind) => dispatch({type: actionTypes.deleteNote, index: ind}),
        changed: (txt, ind) => dispatch({type: actionTypes.changeText, index: ind, text: txt}),
        updateZ: (ind) => dispatch({type: actionTypes.updateZIndex, index: ind}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(bulletinBoard);