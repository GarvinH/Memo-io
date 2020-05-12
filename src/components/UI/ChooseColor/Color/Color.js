import React, { useContext } from 'react'
import classes from './Color.module.css'
import NoteContext from '../../../../context/NoteContext'

const Color = (props) => {
    const noteContext = useContext(NoteContext);
    const style = props.active? {backgroundColor: props.color, border: "5px #4D90FE solid"} : {backgroundColor: props.color}

    return (
    <div className={classes.color} style={style} onClick={() => {
        noteContext.changeColor(props.color)
    }}>
    </div>)
}

export default Color;