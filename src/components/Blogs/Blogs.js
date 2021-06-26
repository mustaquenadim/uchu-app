import React, { useEffect, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://morning-inlet-65384.herokuapp.com/blogs')
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            });
    });
    const handleDeleteBook = (id) => {
        fetch(`http://localhost:8000/deleteABook/${id}`, { method: 'DELETE' }).then((res) => {
            if (res) alert('Blog Deleted Successfully!');
        });
    };
    return (
        <div>
            <h1>Blogs</h1>
            {blogs.map((blog) => (
                <h1>{blog?.title}</h1>
            ))}
        </div>
    );
};

export default Blogs;
