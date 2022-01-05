import React from 'react';
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.loadBar}>
            <div className={cl.bar} />
            <div className={cl.bar} />
            <div className={cl.bar} />
        </div>
    );
};

export default Loader;