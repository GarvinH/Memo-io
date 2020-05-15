import React from 'react'
import Aux from '../../../hoc/Aux'
import classes from './ChooseColor.module.css'
import Color from './Color/Color'

const COLORS_TOP = ["yellow", "#ff7eb9", "#7afcff"];
const COLORS_BOTTOM = ["#dcff46", "#fbad4b"];

const chooseColor = (props) => (
    <Aux>
        <div className={classes.colorContainer}>
            {COLORS_TOP.map((color) => {
                return <Color key={color} active={props.currentColor===color} color={color} />
            })}
        </div>
        <div className={classes.colorContainer}>
            {COLORS_BOTTOM.map((color) => {
                return <Color key={color} active={props.currentColor===color} color={color} />
            })}
        </div>
    </Aux>
)

export default chooseColor