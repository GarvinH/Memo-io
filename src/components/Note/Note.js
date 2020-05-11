import React, { useRef } from 'react';
import classes from './Note.module.css'
import { Rnd } from 'react-rnd'

import { ReactComponent as Resize } from '../../assets/resize.svg'

import NoteContext from '../../context/NoteContext'

const Note = (props) => {
    
    const noteRef = useRef(null)
    const noteContext = React.useContext(NoteContext);

    return (
    
    <Rnd default={{
        x: 200,
        y: 200,
        width: 200,
        height: 200,
        minHeight: 100,
        minWidth: 100
    }}
        className={classes.Note}
        style={{ backgroundColor: props.color}}
        onResize={(event, dir, ref)=> {
            if (parseInt(ref.style.width) < 100) {
                ref.style.width = "100px";
            }
            if (parseInt(ref.style.height) < 100) {
                ref.style.height = "100px";
            }
        }}
        onDragStart={(event, data) => {
            data.node.style.zIndex = noteContext.zIndex;
            noteContext.updateZIndex();
        }} 
        onClick={() => {
            noteRef.current.focus()
        }}>
        <textarea type="text" ref={noteRef} value={props.text}
        style={{backgroundColor: props.color}}
        className={classes.input}
        onChange={props.changed} onMouseUp={() => {
            noteRef.current.blur()
            noteRef.current.focus()
        }
        }></textarea>
        <div onClick={props.delete} className={classes.closeButton}><span role="img" aria-label="close button">&#10060;</span></div>
        <div>
            <Resize className={classes.resizeButton} />
        </div>
    </Rnd>
)}

export default Note;