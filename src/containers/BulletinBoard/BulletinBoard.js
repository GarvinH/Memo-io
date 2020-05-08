import React, { Component } from 'react';
import classes from './BulletinBoard.module.css';
import Note from '../../components/Note/Note'

class BulletinBoard extends Component {

    render () {
        const notes = this.props.notes.map((note, index) => {
            return <Note color={note.color} text={note.text} 
            delete={() => this.props.delete(index)}></Note>
        })

        return (
            <div ref={this.ref} className={classes.BulletinBoard}>
                {notes}
            </div>
        );
    }
}

export default BulletinBoard;