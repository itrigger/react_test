import React from 'react';
import './PostItem.css';
import BtnPrimary from "../UI/button/BtnPrimary";

const PostItem = (props) => {

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <h3>{props.number}. {props.post.title}</h3>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <BtnPrimary onClick={() => props.remove(props.post)}>Удалить</BtnPrimary>
                </div>
            </div>
        </div>
    );
};

export default PostItem;