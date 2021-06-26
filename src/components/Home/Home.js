import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://morning-inlet-65384.herokuapp.com/blogs')
            .then((res) => res.json())
            .then((data) => {
                setBlogs(data);
            });
    });
    return (
        <div className='home'>
            <div class='banner'>
                <img src='https://www.teahub.io/photos/full/6-69284_2560x1440-wallpaper-two-jack-lake-sunset.jpg' alt='Snow' style={{ width: '100%' }} />
                <div className='centered'>
                    <h2>Hello,</h2>
                    <h1>I'm Nadim.</h1>
                    <h3>Welcome to my blog.</h3>
                </div>
            </div>

            <div className='container'>
                <div className='latest__blogs my-5'>
                    <h2 className='section__head text-center my-5'>Latest Blog</h2>

                    <div class='card mb-3'>
                        <img src='...' class='card-img-top' alt='...' />
                        <div class='card-body'>
                            <h5 class='card-title'>Card title</h5>
                            <p class='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class='card-text'>
                                <small class='text-muted'>Last updated 3 mins ago</small>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='blogs my-5'>
                    <h2 className='section__head text-center my-5'>All Blogs</h2>
                    <div class='row row-cols-1 row-cols-md-3 g-4'>
                        {blogs.map((blog) => (
                            <Link to={`/blog/${blog._id}`}>
                                <div className='col'>
                                    <div class='card h-100 border-0'>
                                        <img src={blog?.imageURL} class='card-img-top' alt='...' />
                                        <div class='card-body'>
                                            <h5 class='card-title'>{blog.title}</h5>
                                            <p class='card-text'>{blog.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae natus ab voluptatibus autem beatae, dignissimos sed libero minima debitis necessitatibus nam veniam placeat tempore aut nobis mollitia dicta qui enim quo? Pariatur optio nostrum cumque minus. Harum ab non libero animi assumenda at a nulla autem iusto minima atque, ex deleniti culpa sequi sapiente recusandae laudantium ipsam tempora amet! Rerum quaerat deserunt laborum deleniti cumque atque eligendi dignissimos impedit, mollitia maiores, ducimus quibusdam aliquid voluptate fuga blanditiis repellat vitae eum provident magni dolorem. Expedita, totam! Voluptates laudantium eligendi, id modi commodi sunt recusandae perspiciatis voluptas dolore, illo, enim impedit?
