import React from 'react';

const ChooseCityItem = ({active, onClickLiEvent, index, title}) => {
    return (
        <li key={index} className={active} onClick={()=>onClickLiEvent(index)}><span>{title}</span></li>
    );
};

export default ChooseCityItem;