import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hook/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({
        id:0,
        date:'',
        title:{rendered:''},
        acf:{author:''},
        content:{rendered: ''},
        _embedded:{'wp:featuredmedia':[{media_details: {sizes:{thumbnail:{source_url:''}}}}]},
    })
    //const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
        console.log(response.data)
    })


 /*   const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data)
    })*/

    useEffect(() => {
        fetchPostById(params.id)
       // fetchComments(params.id)
    }, [])
    return (
        <div>
            {
                isLoading
                    ? <Loader/>
                    : <div>

                        {post.id}. {post.date}
                    <br/>
                        { post.acf.author}
                        { <div dangerouslySetInnerHTML={{__html: post.content.rendered}}></div>}
                        {post._embedded ?
                            <img src={`${post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}`}/>
                            : <></>
                        }

                </div>
            }

          {/*  <h2>Комменты</h2>
            {
                isComLoading
                    ? <Loader/>
                    : <div>
                        {comments.map(comm =>
                            <div style={{marginTop: 15}} key={comm.id}>
                                <h5>{comm.email}</h5>
                                <div>{comm.body}</div>
                            </div>
                        )}
                    </div>
            }*/}


        </div>
    );
};

export default PostIdPage;