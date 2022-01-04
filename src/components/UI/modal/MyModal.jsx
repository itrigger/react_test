import React, {useContext} from 'react';
import cl from './MyModal.module.css'
import {SendMsgOk} from "../../../context";

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]

    const {sendMsgStatus, setSendMsgStatus} = useContext(SendMsgOk)

    if(sendMsgStatus){
        rootClasses.push(cl.active)
    }

    return (
        <div>
            <div className={rootClasses.join(' ')} onClick={() => setSendMsgStatus(false)}>
                <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                    <div className={cl.myModalBtnClose} onClick={()=>setSendMsgStatus(false)}>×</div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyModal;