import React, {useContext, useEffect} from 'react';
import cl from "./Navbar.module.css"
import {Link} from "react-router-dom";
import BtnPrimary from "../button/BtnPrimary";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={cl.navbar}>
            <BtnPrimary onClick={logout}>Logout</BtnPrimary>
            <div className={cl.navbar__items}>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;