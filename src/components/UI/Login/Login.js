import React from 'react';
import classes from './Login.module.css'
import Aux from '../../../hoc/Aux'

const login = (props) => (
    <Aux>
        <h1 className={classes.title}>Login</h1>
        <hr className={classes.hr}></hr>
        <form className={classes.login}>
            <label for="email">Email:</label>
            <input type="email" placeholder="Enter your email here"></input>
            <label for="password">Password:</label>
            <input type="password" placeholder="Enter your password here"></input>
            <input type="submit" value="Submit"></input>
        </form>
    </Aux>
)

export default login;