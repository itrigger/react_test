import React, {useContext, useState} from 'react';
import {useAlert} from "react-alert";
import PostService from "../../API/PostService";
import MyInput from "../UI/input/MyInput";
import BtnPrimary from "../UI/button/BtnPrimary";
import MyTextarea from "../UI/input/MyTextarea";

const SendMsgForm = ({closeModal}) => {
    const [post, setPost] = useState({
        name: '',
        tel: '',
        msg: ' '
    })

    const alert = useAlert();

    const sendForm = async (e) => {
        e.preventDefault(e)
        setPost({name: '', tel: '', msg:''})
        let formData = new FormData()

        formData.set("CFname", post.name)
        formData.set("CFtel", post.tel)
        formData.set("CFmsg", post.msg)

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
            <h2>Отправить сообщение</h2>
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
                        <MyTextarea
                            placeholder="Текст сообщения"
                            value={post.msg}
                            onChange={e => setPost({...post, msg: e.target.value})}
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

export default SendMsgForm;