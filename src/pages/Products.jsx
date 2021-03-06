import React, {useEffect, useState} from 'react';
import {useFetching} from "../hook/useFetching";
import {getPagesCount} from "../components/utlis/pages";
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import ProductService from "../API/ProductService";
import ProductList from "../components/products/ProductList";
import {useObserver} from "../hook/useObserver";

const Products = () => {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await ProductService.getAllProducts()
        console.log(response)
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-wp-total']
        setTotalPages(getPagesCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page, limit])

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div>
            <ProductList posts={posts}/>

            {isPostsLoading && <Loader/>}

            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
};

export default Products;