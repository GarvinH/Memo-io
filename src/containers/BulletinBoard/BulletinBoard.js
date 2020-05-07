import React, { Component } from 'react';
import classes from './BulletinBoard.module.css';
import Note from '../../components/Note/Note'

class BulletinBoard extends Component {

    render () {
        const notes = this.props.notes.map((note) => {
            return <Note left={note.left} top={note.top} width={note.width} height={note.height} color={note.color} text={note.text}></Note>
        })

        return (
            <div className={classes.BulletinBoard}>
                {notes}
            </div>
        );
    }
}

export default BulletinBoard;