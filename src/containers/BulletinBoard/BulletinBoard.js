import React from 'react';
import classes from './BulletinBoard.module.css';
import Note from '../../components/Note/Note'

const bulletinBoard = (props) => {

    const notes = props.notes.map((note, index) => {
        return <Note key={note.iden} color={note.color} text={note.text}
            delete={() => props.delete(index)} changed={(event) => props.changed(event, index)}></Note>
    })

    return (
        <div className={classes.BulletinBoard}>
            {notes}
        </div>
    );

}

export default bulletinBoard;