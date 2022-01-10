import React, {useContext, useState} from 'react';
import {useAlert} from "react-alert";
import PostService from "../../API/PostService";
import MyInput from "../UI/input/MyInput";
import BtnPrimary from "../UI/button/BtnPrimary";
import {SendMsgOk} from "../../context";

const SendMsgForm = () => {
    const [data, setData] = useState({
        name: '',
        tel: '',
        msg: ' '
    })

    const {sendMsgStatus, setSendMsgStatus} = useContext(SendMsgOk)

    const alert = useAlert();

    const sendForm = async (e) => {
        e.preventDefault(e)
        setData({name: '', tel: '', msg: ''})
        let formData = new FormData()

        formData.set("CFname", data.name)
        formData.set("CFtel", data.tel)
        formData.set("CFmsg", data.msg)

        let response = await PostService.sendFormCF7(formData, 13)
        if(!response){alert.error('Сервер не отвечает')}
        if(response.data.status === "mail_sent"){
            alert.removeAll()
            alert.success(response.data.message)
            setSendMsgStatus(false)
            console.log(sendMsgStatus)
        } else {
            alert.removeAll()
            alert.error(response.data.message)
            setSendMsgStatus(true)
            console.log(sendMsgStatus)
        }
    }
    return (
        <div className="form-wrap">
            <h2>Напишите нам</h2>
            <div className="form">
                <form>
                    <div className="f_line">
                        <MyInput
                            type="text"
                            placeholder="Введите имя"
                            value={data.name}
                            onChange={e => setData({...data, name: e.target.value})}
                        />
                    </div>
                    <div className="f_line">
                        <MyInput
                            type="text"
                            placeholder="Введите телефон"
                            value={data.tel}
                            onChange={e => setData({...data, tel: e.target.value})}
                        />
                    </div>
                    <div className="f_line">
                        <textarea
                            placeholder="Введите телефон"
                            value={data.tel}
                            onChange={e => setData({...data, msg: e.target.value})}
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