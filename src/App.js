import React, {useState} from "react";
import './styles/App.scss'
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {positions, Provider, transitions} from "react-alert";
import AlertTemplate from "./components/UI/alert/react-alert-template-basic";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {SendMsgOk, CalcContext} from "./context";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from "@apollo/client";

const link = createHttpLink({
    uri: 'https://testim.pw/graphql'
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});


function App() {
    const options = {
        timeout: 5000,
        position: positions.TOP_RIGHT,
        transition: transitions.SCALE,
    }

    // const [sendMsgStatus, setSendMsgStatus] = useState(false)  //глобальное управление модальным окном
    const [activeMobMenu, setActiveMobMenu] = useState('')  //глобальное управление модальным окном мобильного меню
    const [rowCountID, setRowCountID] = useState(1)

    return (
        <ApolloProvider client={client}>
            <CalcContext.Provider value={{
                rowCountID, setRowCountID
            }}>
                <SendMsgOk.Provider value={{
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
            </CalcContext.Provider>
        </ApolloProvider>
    )
}

export default App;
