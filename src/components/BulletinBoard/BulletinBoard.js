import React from 'react';
import classes from './BulletinBoard.module.css';
import Note from '../Note/Note'
import PropTypes from 'prop-types'

const bulletinBoard = (props) => {

    const notes = props.notes.map((note, index) => {
        return <Note key={note.iden} color={note.color} text={note.text} zIndex={note.zIndex}
            delete={() => props.delete(index)} changed={(event) => props.changed(event, index)}
            updateZ={() => props.updateZ(index)}></Note>
    })

    return (
        <div className={classes.BulletinBoard}>
            {notes}
        </div>
    );

}

bulletinBoard.propTypes = {
    notes: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired,
    changed: PropTypes.func.isRequired,
    updateZ: PropTypes.func.isRequired,
}

export default bulletinBoard;