import React from 'react';
import classes from "./BtnPrimary.module.css";

const BtnPrimary = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btnPrimary}>
            {children}
        </button>
    );
};

export default BtnPrimary;