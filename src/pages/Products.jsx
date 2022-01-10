import React, {useEffect, useState} from 'react';
import Loader from "../components/UI/loader/Loader";
import Pagination from "../components/UI/pagination/Pagination";
import ProductList from "../components/products/ProductList";
import { useQuery } from "@apollo/client";
import {PRODUCTS_GET_ALL} from "../GraphQL/queries";
import {getPagesCount} from "../components/utlis/pages";

const Products = () => {

    const { loading, error, data } = useQuery(PRODUCTS_GET_ALL);

    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {
        if(!loading) {
            setPosts(data.products.nodes)
            setTotalPages(data.products.nodes.length)
        }
    }, [data])

    if (error) return <p>Error :(</p>;

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