import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/posts">Posts</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contacts">Контакты</Link></li>
            </ul>
    );
};

export default Navbar;


