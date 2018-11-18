import React from 'react'
import './_menu.css';

class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    getInitialState() {
        return {open: false};
    }

    toggleMenu() {
        this.setState({open: !this.state.open});
    }


    render() {
        const linksArray = [
            {name: "Home", url: "/"},
            {name: "Blog", url: "/blog"},
            {name: "About us", url: "/about"},

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

            <header className="menu-site">

                <Panel
                    open={this.state.open}
                    links={linksArray}
                    socialLinks={socialArray}
                />
                <Button
                    toggle={this.toggleMenu}
                    open={this.state.open}
                />


            </header>
        )
    }
}

class Button extends React.Component {
    render() {
        return (
            <button
                className={this.props.open
                    ? "menu-toggle close-button"
                    : "menu-toggle "}
                onClick={this.props.toggle}>
                <i className='menu-btn-plus'>+</i>
            </button>
        );
    }
}

class Panel extends React.Component {
    render() {
        return (
            <div className="fixed-menu">
                <div
                    className={this.props.open
                        ? "menu-wrapper menu-open"
                        : "menu-wrapper"}
                >
                    <Links
                        links={this.props.links}
                        open={this.props.open}
                    />

                </div>
            </div>
        );
    }
}

class Links extends React.Component {
    render() {
        const linkList = this.props.links.map((link, i) => (
            <li key={i}>
                <a href={link.url}>{link.name}</a>
            </li>
        ));

        return (
            <div
                className={this.props.open
                    ? "links-wrapper"
                    : "links-wrapper links-wrapper-closed"}
            >
                <ul className="link-list">
                    {linkList}
                </ul>
            </div>
        );
    }
}


export default Menu
