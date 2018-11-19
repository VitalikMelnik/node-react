// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router';

//import App from './components/app';
import Home from './components/home/Home';
import About from './components/about/About';
import NotFound from './components/notfound/Error';
import Blog_root from './components/blog_root/Blog_root';


//import EditUsers from './components/users/edit.js';
import { createStore } from 'redux';
import todoApp from './reducers';
import { Provider } from 'react-redux'
//import { connect } from 'react-redux'
import Login from "./components/login/Login";


let store = createStore(todoApp)
//console.log(store.getState())


const Routes = (props) => (
<Provider store={store}>
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/blog" component={Blog_root} />
    <Route path="*" component={NotFound} />
  </Router>
</Provider>
);
 
export default Routes;