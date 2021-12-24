import React from 'react';
import cl from './MyModal.module.css'
import BtnPrimary from "../button/BtnPrimary";

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.myModal]
    if(visible){
        rootClasses.push(cl.active)
    }

    return (
        <div>
            <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
                <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                    <BtnPrimary onClick={()=>setVisible(false)}>×</BtnPrimary>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyModal;