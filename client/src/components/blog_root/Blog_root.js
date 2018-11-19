import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
//import BlogList from './Blog_list'
import Post from '../post/Post'
//import Users from '../users';
import Blog_list from '../blog_list/Blog_list'
class Blog_root extends React.Component {

    render() {
        return (
             <BrowserRouter>
                    <Switch>
                        <Route exact path='/blog' component={Blog_list}/>
                        <Route path='/blog/:id' component={Post}/>
                    </Switch>
             </BrowserRouter>
        )
    }


}

export default Blog_root
