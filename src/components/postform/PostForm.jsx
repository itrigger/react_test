import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import BtnPrimary from "../UI/button/BtnPrimary";

const PostForm = ({create}) => {

    const [post, setPost] = useState({
        title:'',
        body:''
    })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body:''})
    }

    return (
        <div>
            <form>
                {/*управляемые компонент*/}
                <MyInput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                {/*неуправляемые компонент https://www.youtube.com/watch?v=GNrdg3PzpJQ&t=2729s*/}
                <MyInput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"
                />
                <BtnPrimary onClick={addNewPost}>Создать пост</BtnPrimary>
            </form>
        </div>
    );
};

export default PostForm;