import React from 'react';
import cl from "./Navbar.module.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cl.navbar}>
            <div className={cl.navbar__items}>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;