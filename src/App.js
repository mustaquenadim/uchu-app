import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import WriteABlog from './components/WriteABlog/WriteABlog';
import ManageBlogs from './components/ManageBlogs/ManageBlogs';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                    <Route path='/blogs'>
                        <Header />
                        <Blogs />
                    </Route>
                    <Route path='/blog/:_id'>
                        <Header />
                        <Blog />
                    </Route>
                    <Route path='/dashboard/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route path='/dashboard/writeABlog'>
                        <WriteABlog />
                    </Route>
                    <Route path='/dashboard/manageBlogs'>
                        <ManageBlogs />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <Route path='*'>
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
