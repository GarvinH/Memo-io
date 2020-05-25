import React, { useContext } from 'react'
import classes from './Color.module.css'
import NoteContext from '../../../../context/NoteContext'
import PropTypes from 'prop-types'

const Color = (props) => {
    const noteContext = useContext(NoteContext);
    const style = props.active? {backgroundColor: props.color, border: "5px #4D90FE solid"} : {backgroundColor: props.color}

    return (
    <button className={classes.color} style={style} onClick={() => {
        noteContext.changeColor(props.color)
    }}>
    </button>)
}

Color.propTypes = {
    active: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
}

export default Color;