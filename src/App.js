import Counter from "./components/Counter";
import {useEffect, useState} from "react";
import PostList from "./components/postlist/PostList";
import PostForm from "./components/postform/PostForm";
import PostFilter from "./components/postfilter/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import BtnPrimary from "./components/UI/button/BtnPrimary";
import './styles/App.css'
import {usePosts} from "./hook/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hook/useFetching";
import {getPagesCount} from "./components/utlis/pages"

function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    let pagesArray = []
    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }


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
    }, [])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
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
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

        </div>
    );
}

export default App;
