import React from 'react'
//import PostBlog from "../date"
//import Error from './Error'


class ViewPost extends React.Component {

    constructor() {
        super();
        this.state = {
            date: [],
            filter: ''
        };
        this.logChange = this.logChange.bind(this);
    }

    componentDidMount() {

        fetch('/users')
            .then(res => res.json())
            .then(posts => this.setState({ date: posts }));

    }

    logChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        this.state.date = this.state.date.splice(0,1);
        this.state.date = this.state.date[0];
        console.log(this.state.date)
        return (
            <div className="post-class">
                <header className="post-diagonal" style={{
                    backgroundImage: `url(${this.state.imgpost})`
                }}>
                    <h1>{this.state.title}</h1>
                </header>
                <div className="post-container">
                    <h2>{this.state.name} {this.state.date}</h2>
                    <p>{this.state.description}</p>
                    <blockquote>{this.state.proverb}
                        <cite>~ {this.state.proverbavt}</cite>
                    </blockquote>
                    <p>{this.state.text}</p>
                    <p>{this.state.text}</p>
                    <p>{this.state.text}</p>
                    <p>{this.state.text}</p>
                    <p>{this.state.text}</p>
                    <p>{this.state.text}</p>
                    <p>{this.state.text}</p>
                    <p>{this.state.text}</p>

                </div>
            </div>
        )
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: parseInt(props.match.params.number, 10),
        }
    }

    render() {
        let view;
        if (this.state.date <= 10) {
            view = <ViewPost date={this.state.date}/>
        }
        else {
            view = <ViewPost date={this.state.date}/>
        }
        return (
            <div>
                {view}
            </div>
        )
    }

}

export default Post
