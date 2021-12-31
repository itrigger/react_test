import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import BtnPrimary from "../components/UI/button/BtnPrimary";
import {AuthContext} from "../context";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext)



   const login = event => {
       event.preventDefault()
       setIsAuth(true)
       localStorage.setItem('auth', 'true')
   }

    return (
        <div>
           <h1>Страница Авторизации</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Login"/>
                <MyInput type="password" placeholder="Password"/>
                <BtnPrimary>Login</BtnPrimary>
            </form>
        </div>
    );
};

export default Login;