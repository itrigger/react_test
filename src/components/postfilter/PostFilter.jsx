import React from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e=>setFilter({...filter, query:e.target.value})}
                placeholder="Search"/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}
                defaulValue="Sort"
                options={[
                    {value: 'title', name: "by Name"},
                    {value: 'body', name: "by Desc"},
                ]}
            />
        </div>
    );
};

export default PostFilter;