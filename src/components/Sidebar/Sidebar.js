import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-lg-3 sidebar'>
            <div className='sidebar__col bg-white p-3' style={{ height: '85vh' }}>
                <ul className='list-unstyled'>
                    <li className='p-2'>
                        <Link to='/dashboard/writeABlog' className='text-decoration-none'>
                            Write a Blog
                        </Link>
                    </li>
                    <li className='p-2'>
                        <Link to='/dashboard/manageBlogs' className='text-decoration-none'>
                            Manage Blogs
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
