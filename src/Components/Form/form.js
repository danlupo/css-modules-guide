import React from 'react'
import { mergeClasses } from '../../classify';

import defaultClasses from './formsA.css'



/**
 * @typedef ButtonAlt
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a ButtonAlt that toggles the map.
 */
const Form = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    /* @TODO: WIP */
    return (
        <form method="post" action="">

            <h3 className={classes.logo}>Log In</h3>

            <label className={classes.label} htmlFor="username">Username</label>
            <input className={classes.input} type="text" name="username" placeholder="Type in your username.." autoComplete="off" required />

            <label className={classes.label} htmlFor="password">Password</label>
            <input className={classes.input} type="password" name="password" placeholder="Enter your password.." autoComplete="off" required />

            <a className={classes.anchor} href="#forgot">Forgot Password?</a>
            <a className={classes.anchor} href="#register">Register</a>

            <input className={classes.submit} type="submit" name="submit" value="Log In" />

        </form>
    );
};

export default Form;