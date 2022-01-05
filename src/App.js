import React, {useState} from "react";
import './styles/App.scss'
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {positions, Provider, transitions} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {SendMsgOk} from "./context";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://testim.pw',
    cache: new InMemoryCache()
});

function App() {
    const options = {
        timeout: 5000,
        position: positions.TOP_RIGHT,
        transition: transitions.SCALE,
    }


    const [sendMsgStatus, setSendMsgStatus] = useState(false)  //глобальное управление модальным окном
    const [activeMobMenu, setActiveMobMenu] = useState('')  //глобальное управление модальным окном мобильного меню

    return (
        <ApolloProvider client={client}>
            <SendMsgOk.Provider value={{
                sendMsgStatus,
                setSendMsgStatus,
                activeMobMenu,
                setActiveMobMenu
            }}>
                <Provider template={AlertTemplate} {...options}>
                    <Router>
                        <Header/>
                        <AppRouter/>
                        <Footer/>
                    </Router>
                </Provider>
            </SendMsgOk.Provider>
        </ApolloProvider>
    )
}

export default App;
