import React from 'react'
import classes from './Registration.module.css'
import Aux from '../../../hoc/Aux'

const registsration = (props) => (
    <Aux>
        <h1 className={classes.title}>Sign Up</h1>
        <hr></hr>
        <form className={classes.signup}>
            <label htmlFor="name">
                Name:
                <input type="text" placeholder="Your name here" />
            </label>

            <label htmlFor="email">
                Email:
                <input type="email" placeholder="Your email here" />
            </label>

        </form>
        <form className={classes.signup}>
            <label htmlFor="password">
                Password:
                <input type="password" placeholder="Your password here" />
            </label>

            <label htmlFor="confirm password">
                Confirm Password:
                <input type="password" placeholder="Confirm your password here" />
            </label>

        </form>
        <input className={classes.submit} type="submit" value="Submit" />
    </Aux>
)

export default registsration;