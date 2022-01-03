import React, {useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import BtnPrimary from "../components/UI/button/BtnPrimary";
import PostService from "../API/PostService";
import {useAlert} from "react-alert";

const Contacts = () => {

    const [post, setPost] = useState({
        name:'',
        tel:''
    })
    const alert = useAlert();

    const sendForm = async (e) => {
        e.preventDefault()
        setPost({name: '', tel:''})
        let formData = new FormData()

        formData.set("CFname", post.name)
        formData.set("CFtel", post.tel)

        let response = await PostService.sendFormCF7(formData, 12)
        console.log(response)
        response.data.status === "mail_sent"
            ? alert.success(response.data.message)
            : alert.error(response.data.message)
    }

    return (
        <div>
            <form>
                <MyInput
                    type="text"
                    placeholder="Введите имя"
                    value={post.name}
                    onChange={e => setPost({...post, name: e.target.value})}
                />
                <MyInput
                    type="text"
                    placeholder="Введите телефон"
                    value={post.tel}
                    onChange={e => setPost({...post, tel: e.target.value})}
                />
                <BtnPrimary onClick={sendForm}>Отправить</BtnPrimary>
            </form>
        </div>
    );
};

export default Contacts;