import React from 'react'
import './_about_us.css';

var open_description_vitalik = function (event) {
    this.setState({
        isHidden1: !this.state.isHidden1
    })
}

var open_description_nazar = function (event) {
    this.setState({
        isHidden2: !this.state.isHidden2
    })
}

class About_us extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden1: false,
            isHidden2: false,
            open: true

        }
        open_description_vitalik = open_description_vitalik.bind(this);
        open_description_nazar = open_description_nazar.bind(this);
    }

    render(id) {
        const socialArray2 = [
            {
                icon: "menu-social-fb",
                url: "https://www.facebook.com/profile.php?id=100006848356315"
            }, {
                icon: "menu-social-inst",
                url: "https://www.instagram.com/??"
            }, {
                icon: "menu-social-git",
                url: "https://github.com/??"
            }
        ];
        const socialArray = [
            {
                icon: "menu-social-fb",
                url: "https://www.facebook.com/melnik.vitaliy.008"
            }, {
                icon: "menu-social-inst",
                url: "https://www.instagram.com/melnik__vitaliy/"
            }, {
                icon: "menu-social-git",
                url: "https://github.com/VitalikMelnik"
            }
        ];
        return (

            <section>
                <div className="grid">
                    <div id="west" className="column effect-hover">
                        <div className="content" onClick={open_description_vitalik}>
                            <i className="fa fa-venus" aria-hidden="true"></i>
                            <h2>Go <span>Vitalik</span></h2>
                            <h3>Learn more about</h3>
                            <p>Melnik V.</p>
                        </div>
                    </div>
                    <div id="east" className="column effect-hover">
                        <div className="content" onClick={open_description_nazar}>
                            <i className="fa fa-mars" aria-hidden="true"></i>
                            <h2>Go <span>Nazar</span></h2>
                            <h3>Learn more about</h3>
                            <p>Oryschuk N.</p>
                        </div>
                    </div>
                </div>

                {this.state.isHidden1 ?
                    <ViewVitalik open={this.state.open} socialLinks={socialArray}></ViewVitalik> : null}
                {this.state.isHidden2 ?
                    <ViewNazar open={this.state.open} socialLinks={socialArray2}></ViewNazar> : null}
            </section>
        )
    }
}

class ViewNazar extends React.Component {
    render() {
        return (
            <div id="east-overlay" className="overlay">
                <div className="grid">
                    <div className="column">
                        <img className="img-about-us-2"/>

                    </div>
                    <div className="column">
                        <div className="product-content">
                            <h1 className="about-text-header">Oryschuk Nazar</h1>
                            <ul>
                                <li>IT developer</li>
                                <li>Soft Serve</li>
                                <li>The best boy</li>
                                <li>Sportsman</li>
                            </ul>
                            <Social
                                socialLinks={this.props.socialLinks}
                                open={this.props.open}
                            />
                        </div>
                    </div>
                </div>


                <div className="close-icon" onClick={open_description_nazar}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

class ViewVitalik extends React.Component {
    render() {

        return (
            <div id="west-overlay" className="overlay">
                <div className="grid">
                    <div className="column">
                        <img className="img-about-us"/>

                    </div>
                    <div className="column">
                        <div className="product-content">
                            <h1 className="about-text-header">Vitalik Melnik</h1>
                            <ul>
                                <li>IT developer</li>
                                <li>Speaker</li>
                                <li>SMM specialist</li>
                                <li>Sportsman</li>
                            </ul>
                            <Social
                                socialLinks={this.props.socialLinks}
                                open={this.props.open}
                            />
                        </div>

                    </div>
                </div>
                <div className="close-icon" onClick={open_description_vitalik}>
                    <div></div>
                    <div></div>
                </div>
            </div>


        )
    }


}

class Social extends React.Component {
    render() {
        const socialLinks = this.props.socialLinks.map((link, i) => (
            <a key={i} target='_blank' href={link.url}>
                <div className={link.icon}/>

            </a>
        ));

        return (
            <div
                className={this.props.open
                    ? "social-wrapper social-open"
                    : "social-wrapper social-closed"}
            > {socialLinks}
            </div>
        );
    }

}

export default About_us
