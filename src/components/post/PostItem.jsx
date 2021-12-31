import React from 'react';
import './PostItem.css';
import BtnPrimary from "../UI/button/BtnPrimary";
import {useHistory} from "react-router-dom";

const PostItem = (props) => {
    const router = useHistory()

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <h3>{props.post.id}. {props.post.title}</h3>
                    <div>{props.post.body}</div>
                </div>
                <div className="post__btns">
                    <BtnPrimary onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</BtnPrimary>
                    <BtnPrimary onClick={() => props.remove(props.post)}>Удалить</BtnPrimary>
                </div>
            </div>
        </div>
    );
};

export default PostItem;