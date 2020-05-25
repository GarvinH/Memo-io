import React from 'react'
import Aux from '../../../hoc/Aux'
import classes from './ChooseColor.module.css'
import Color from './Color/Color'
import PropTypes from 'prop-types'

const chooseColor = (props) => {
    const COLORS_TOP = props.colorOptions.slice(0, Math.ceil(props.colorOptions.length/2))
    const COLORS_BOTTOM = props.colorOptions.slice(Math.ceil(props.colorOptions.length/2), props.colorOptions.length)

    return (
        <Aux>
            <div className={classes.colorContainer}>
                {COLORS_TOP.map((color) => {
                    return <Color key={color} active={props.currentColor === color} color={color} />
                })}
            </div>
            <div className={classes.colorContainer}>
                {COLORS_BOTTOM.map((color) => {
                    return <Color key={color} active={props.currentColor === color} color={color} />
                })}
            </div>
        </Aux>
    )
}

chooseColor.propTypes = {
    colorOptions: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
}

export default chooseColor