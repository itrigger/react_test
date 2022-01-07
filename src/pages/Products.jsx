import React, {useState} from 'react';
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import ProductList from "../components/products/ProductList";
import {
    useQuery
} from "@apollo/client";
import {PRODUCTS_GET_ALL} from "../GraphQL/queries";

const Products = () => {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)


    const { loading, error, data } = useQuery(PRODUCTS_GET_ALL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    if(data) {
        setPosts([])
        setTotalPages(data.products.nodes.length)
        setPosts(data.products.nodes)
    }

    const changePage = (page) => {
        window.scrollTo(0, 0)
        setPage(page)
    }

    return (
        <div className="in">
            <ProductList posts={posts}/>

            {loading && <Loader/>}

            <Pagination totalPages={totalPages} page={page} changePage={changePage}/>
        </div>
    );
};

export default Products;