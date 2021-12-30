import React from 'react';
import {getPagesArray} from "../../utlis/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="paginator">
            {pagesArray.map(p =>
                <span
                    onClick={()=>changePage(p)}
                    key={p}
                    className={page === p ? "page active" : "page"}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;