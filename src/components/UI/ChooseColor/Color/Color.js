import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../../../../store/actions'
import classes from './Color.module.css'
import PropTypes from 'prop-types'

const Color = ({active, color, changeColor}) => {
    const style = active? {backgroundColor: color, border: "5px #4D90FE solid"} : {backgroundColor: color}

    return (
    <button className={classes.color} style={style} onClick={() => {
        changeColor(color)
    }}>
    </button>)
}

Color.propTypes = {
    active: PropTypes.bool.isRequired,
    color: PropTypes.string.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        changeColor: (newColor) => dispatch({type: actionTypes.changeColor, color: newColor})
    }
}

export default connect(null, mapDispatchToProps)(Color);