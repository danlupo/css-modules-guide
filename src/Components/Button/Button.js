import React from 'react';
import defaultClasses from './button.css';
import { mergeClasses } from '../../classify';

/**
 * @typedef Button
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Button that toggles the map.
 */
const Button = props => {
    const classes = mergeClasses(defaultClasses, props.classes);

    const handleClick = () => {};

    /* @TODO: WIP */
    return (
        <button type="button" onClick={handleClick} className={classes.root}>
            Button
        </button>
    );
};

export default Button;
