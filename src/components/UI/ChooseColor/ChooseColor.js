import React from 'react'
import Aux from '../../../hoc/Aux'
import classes from './ChooseColor.module.css'
import Color from './Color/Color'

const COLORS_TOP = ["yellow", "#ff7eb9", "#7afcff"];
const COLORS_BOTTOM = ["#dcff46", "#fbad4b"];
/* RE: my suggestion to pass in colour options as a prop, and the above lines
  It's always handy to have a utility for "chunking" an array in to arrays of equal size (plus a remainder array, potentially).
  Could write one yourself, but I'd normally use https://lodash.com/docs/4.17.15#chunk (side note: lodash is an awesome library,
  go look up some introductions to it).
*/

const chooseColor = (props) => (
    <Aux>
        <div className={classes.colorContainer}>
            {COLORS_TOP.map((color) => {
                return <Color active={props.currentColor===color} color={color} />
            })}
        </div>
        <div className={classes.colorContainer}>
            {COLORS_BOTTOM.map((color) => {
                return <Color active={props.currentColor===color} color={color} />
            })}
        </div>
    </Aux>
)

export default chooseColor