import React from 'react'
import logoImg from '../../../assets/memo.png'
import classes from './Logo.module.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="sticky note"></img>
    </div>
)

export default logo;