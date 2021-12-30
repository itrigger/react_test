import React, {useEffect, useState} from 'react';
import {usePosts} from "../hook/usePosts";
import {useFetching} from "../hook/useFetching";
import PostService from "../API/PostService";
import {getPagesCount} from "../components/utlis/pages";
import BtnPrimary from "../components/UI/button/BtnPrimary";
import PostFilter from "../components/postfilter/PostFilter";
import Counter from "../components/Counter";
import Loader from "../components/UI/loader/Loader";
import PostList from "../components/postlist/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import MyModal from "../components/UI/modal/MyModal";
import PostForm from "../components/postform/PostForm";


const Posts = () => {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    useEffect(() => {
        fetchPosts()
    }, [page])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }


    return (
        <div className="App">

            <BtnPrimary onClick={() => setModal(true)}>
                Добавить пост
            </BtnPrimary>

            <hr/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            {postError && <h1>Ошибка ${postError}</h1>}

            <Counter/>

            {isPostsLoading
                ? <Loader/>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts}/>
            }
            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>

            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

        </div>
    );
};

export default Posts;