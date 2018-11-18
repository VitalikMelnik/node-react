import React from 'react'
import './_home.css';

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return 'url(../home_wallpapers/' + number + '.jpg)';
}

class Home extends React.Component {
    state = {
        response: '',
        post: '',
        responseToPost: '',
    };

    constructor(props) {
        super(props);
        this.state = {
            src: (getRandomArbitrary(1, 20)),
            arr : []
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            8000
        );
        this.callApi()
            .then(res => this.setState({ arr: res.data }))
            .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    tick() {
        this.setState({
            src: (getRandomArbitrary(1, 20)),
        });
    }

    render() {

        return (
            <div className='home-div-imgbackr' style={{backgroundImage: this.state.src, width: window.innerWidth, height: window.innerHeight}} >
                <h3 className="home-welcome-text">
                    <p>you must</p>
                    <div className="home-dropping-texts">
                        <p>Work!</p>
                        <p>Study!</p>
                        <p>Progress!</p>
                        <p>LIVE!</p>
                    </div>
                </h3>
            </div>
        )
    }
}


export default Home
