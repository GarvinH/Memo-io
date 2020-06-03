import React from 'react'
import { connect } from 'react-redux'
import { COLOR_OPTIONS } from '../../../store/reducer'
import Aux from '../../../hoc/Aux'
import classes from './ChooseColor.module.css'
import Color from './Color/Color'
import PropTypes from 'prop-types'

const chooseColor = ({currentColor}) => {
    const COLORS_TOP = COLOR_OPTIONS.slice(0, Math.ceil(COLOR_OPTIONS.length/2))
    const COLORS_BOTTOM = COLOR_OPTIONS.slice(Math.ceil(COLOR_OPTIONS.length/2), COLOR_OPTIONS.length)

    return (
        <Aux>
            <div className={classes.colorContainer}>
                {COLORS_TOP.map((color) => {
                    return <Color key={color} active={currentColor === color} color={color} />
                })}
            </div>
            <div className={classes.colorContainer}>
                {COLORS_BOTTOM.map((color) => {
                    return <Color key={color} active={currentColor === color} color={color} />
                })}
            </div>
        </Aux>
    )
}

chooseColor.propTypes = {
    currentColor: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    return {
        currentColor: state.currentColor
    }
}

export default connect(mapStateToProps)(chooseColor)