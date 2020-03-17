import React from 'react';
import defaultClasses from './anchor.css';
import { mergeClasses } from '../../classify';

/**
 * @typedef Anchor
 * @kind functional component
 *
 * @param {props} props React component props
 *
 * @returns {React.Element} A React component that displays a Anchor that toggles the map.
 */
const Anchor = props => {
    const classes = mergeClasses(defaultClasses, props.classes);

    const handleClick = () => {};

    /* @TODO: WIP */
    return (
        <a type="button" href="#somewhere" onClick={handleClick} className={classes.root}>
            Anchor
        </a>
    );
};


export default Anchor;
