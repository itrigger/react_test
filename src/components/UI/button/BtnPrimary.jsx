import React from 'react';
import classes from "./BtnPrimary.module.css";

const BtnPrimary = ({children, ...props}) => {

    const rootClasses = [classes.btnPrimary]

    if(props.className){
        rootClasses.push(props.className)
    }

    return (
        <button {...props} className={rootClasses.join(' ')}>
            {children}
        </button>
    );
};

export default BtnPrimary;