import React from 'react'
//import PostBlog from '../date'
import {Link} from 'react-router-dom'
import './_blog-list.css'






class PostFilter extends React.Component {
    handleChange(event) {
        this.props.updateSearch(event.target.value);
    }

    render() {
        return (
            <form className="blog-search-form">
                <div className="blog-input-group search-group">
                    <input type="text" className="blog-form-control blog-search-control"
                           placeholder="Enter your search term..."
                           onChange={this.handleChange.bind(this)} value={this.props.searchText}>
                    </input>
                </div>
            </form>
        )
    }
}

class PostList extends React.Component {




    filter(date) {
        if (!this.props.filter) {
            return date
        }
        return date.filter((post) => post.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0)
    }

    render() {
        return (
            <ul className="blog-post-list">
                {this.filter(this.props.date)
                    .map((post) =>
                        <li className="blog-post" key={post.id}>
                            <div className="blog-post__excerpt card">
                                <header className="blog-card__header">
                                    <h2>{post.title}</h2>
                                    <time className="blog-card__date">{post.date}</time>
                                </header>
                                <p>{post.description}</p>
                                <div className="blog-card__cta">
                                    <Link to={`/blog/${post.id}`}> Read more</Link>
                                </div>
                            </div>
                            <img className="blog-post__image" src={post.img} alt={post.title}/>
                        </li>
                    )}
            </ul>

        )
    }
};

class Blog_list extends React.Component {
    constructor() {
        super();
        this.state = {
            date: [],
            filter: ''
        };
        this.logChange = this.logChange.bind(this);
    }
    componentDidMount() {
        let self = this;
        fetch('/users')
            .then(res => res.json())
            .then(posts => this.setState({ date: posts }));

    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    updateSearch(inputValue) {

        this.setState({
            filter: inputValue
        });
    }

    render() {
        console.log(this.state.date)
        return (
            <div className="blog-container">
                <div className="blog-svg-wrapper">
                    <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
                        <rect className="blog-shape" height="60" width="320"/>
                        <text x="40" y="40" className="text-blog">Unicorn blog</text>
                    </svg>
                </div>
                <div className="blog-block">
                    <div className="blog-loading">
                        <span className="blog-ball1"></span>
                        <span className="blog-ball2"></span>
                    </div>
                </div>
                <PostFilter updateSearch={this.updateSearch.bind(this)} searchText={this.state.filter}/>
                <PostList filter={this.state.filter} date={this.state.date}></PostList>
            </div>
        )
    }
}


export default Blog_list
