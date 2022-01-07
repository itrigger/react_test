import React from 'react';
import classes from "./MyTextarea.module.css";

const MyTextarea = (props) => {
    return (
        <textarea className={classes.myTextarea} {...props} />
    );
};

export default MyTextarea;