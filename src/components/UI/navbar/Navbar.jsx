import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
    );
};

export default Navbar;


