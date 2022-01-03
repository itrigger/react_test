import React, {useEffect, useState} from "react";
import './styles/App.css'
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import {positions, Provider, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";

function App() {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const options = {
        timeout: 5000,
        position: positions.TOP_RIGHT,
        transition: transitions.SCALE,
    }

    useEffect(()=>{
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    }, [])

    return (
        <Provider template={AlertTemplate} {...options}>
        <AuthContext.Provider value={{
            isAuth, setIsAuth, isLoading
        }}>
        <Router>
            <Navbar/>
            <AppRouter/>
        </Router>
        </AuthContext.Provider>
        </Provider>
    )
}

export default App;
