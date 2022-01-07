import React, {useContext, useState} from 'react';
import {useAlert} from "react-alert";
import PostService from "../../API/PostService";
import MyInput from "../UI/input/MyInput";
import BtnPrimary from "../UI/button/BtnPrimary";
import {SendMsgOk} from "../../context";

const CallbackForm = ({closeModal}) => {
    const [post, setPost] = useState({
        name: '',
        tel: ''
    })

    const alert = useAlert();

    const sendForm = async (e) => {
        console.log('pressed')
        e.preventDefault(e)
        setPost({name: '', tel: ''})
        let formData = new FormData()

        formData.set("CFname", post.name)
        formData.set("CFtel", post.tel)

        let response = await PostService.sendFormCF7(formData, 12)
        if(response.data.status === "mail_sent"){
            alert.success(response.data.message)
            closeModal()
        } else {
            alert.error(response.data.message)
        }
    }
    return (
            <div className="form-wrap">
                <h2>Заказ обратного звонка</h2>
                <div className="form">
                    <form>
                        <div className="f_line">
                            <MyInput
                                type="text"
                                placeholder="Введите имя"
                                value={post.name}
                                onChange={e => setPost({...post, name: e.target.value})}
                            />
                        </div>
                        <div className="f_line">
                            <MyInput
                                type="text"
                                placeholder="Введите телефон"
                                value={post.tel}
                                onChange={e => setPost({...post, tel: e.target.value})}
                            />
                        </div>
                        <div className="f_line">
                            <BtnPrimary className="btnSendForm" onClick={sendForm}>Отправить</BtnPrimary>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default CallbackForm;