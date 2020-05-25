import React from 'react'
import classes from './Registration.module.css'
import Aux from '../../../hoc/Aux'

const registsration = (props) => (
    <Aux>
        <h1 className={classes.title}>Sign Up</h1>
        <hr></hr>
        <form className={classes.signup}>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Your name here"></input>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Your email here"></input>
        </form>
        <form className={classes.signup}>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="Your password here"></input>
            <label htmlFor="confirm password">Confirm Password:</label>
            <input type="password" placeholder="Confirm your password here"></input>
        </form>
        <input className={classes.submit} type="submit" value="Submit"></input>
    </Aux>
)

export default registsration;