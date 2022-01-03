import React from "react";
import './styles/App.scss'
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {positions, Provider, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    const options = {
        timeout: 5000,
        position: positions.TOP_RIGHT,
        transition: transitions.SCALE,
    }

    return (
        <Provider template={AlertTemplate} {...options}>
            <Router>
                <Header/>
                <AppRouter/>
                <Footer />
            </Router>
        </Provider>
    )
}

export default App;
