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
                    <h3>{props.post.id}. {props.post.title.rendered}</h3>
                    <div dangerouslySetInnerHTML={{__html: props.post.content.rendered}}></div>
                    <div>{props.post.acf.author}</div>
                    {props.post.featured_media > 0
                        ? <img src={`${props.post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}`} alt=""/>
                        : <></>
                    }
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