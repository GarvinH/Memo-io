import React from 'react'
import classes from './Registration.module.css'
import Aux from '../../../hoc/Aux'

const registsration = (props) => (
    <Aux>
        <h1 className={classes.title}>Sign Up</h1>
        <hr></hr>
        <form className={classes.signup}>
            <label>Name:</label>
            <input type="text" placeholder="Your name here"></input>
            <label>Email:</label>
            <input type="email" placeholder="Your email here"></input>
        </form>
        <form className={classes.signup}>
            <label>Password:</label>
            <input type="password" placeholder="Your password here"></input>
            <label>Confirm Password:</label>
            <input type="password" placeholder="Confirm your password here"></input>
        </form>
        <input type="submit" value="Submit"></input>
    </Aux>
)

export default registsration;