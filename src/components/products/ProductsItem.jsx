import React from 'react';
import BtnPrimary from "../UI/button/BtnPrimary";
import {useHistory} from "react-router-dom";

const ProductsItem = (props) => {
    const router = useHistory()

    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <h3>{props.post.id}. {props.post.name}</h3>

                    <div>{props.post.acf.gold}</div>
                    {props.post.images
                        ? <img src={`${props.post.images[0].src}`} alt=""/>
                        : <></>
                    }
                </div>
                <div className="post__btns">
                    <BtnPrimary onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</BtnPrimary>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;