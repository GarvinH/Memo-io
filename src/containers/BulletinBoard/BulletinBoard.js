import React, { Component } from 'react';
import classes from './BulletinBoard.module.css';
import Note from '../../components/Note/Note'

class BulletinBoard extends Component {

    render () {
        const notes = this.props.notes.map((note, index) => {
            return <Note left={note.left} top={note.top} width={note.width} height={note.height} color={note.color} text={note.text} delete={() => this.props.delete(index)}></Note>
        })

        return (
            <div className={classes.BulletinBoard}>
                {notes}
            </div>
        );
    }
}

export default BulletinBoard;