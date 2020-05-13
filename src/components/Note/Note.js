import React, { useRef } from 'react';
import classes from './Note.module.css'
import { Rnd } from 'react-rnd'
import CloseButton from '../UI/Button/CloseButton/CloseButton'

import { ReactComponent as Resize } from '../../assets/resize.svg'

const Note = (props) => {
    
    const noteRef = useRef(null)

    return (
    
    <Rnd default={{
        x: 200,
        y: 200,
        width: 200,
        height: 200,
        minHeight: 200,
        minWidth: 200
    }}
        className={classes.Note}
        style={{ backgroundColor: props.color, zIndex: props.zIndex}}
        onResize={(event, dir, ref)=> {
            if (parseInt(ref.style.width) < 200) {
                ref.style.width = "200px";
            }
            if (parseInt(ref.style.height) < 200) {
                ref.style.height = "200px";
            }
        }}
        onDragStart={props.updateZ}
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
        <CloseButton clicked={props.delete} />
        <div>
            <Resize className={classes.resizeButton} />
        </div>
    </Rnd>
)}

export default Note;