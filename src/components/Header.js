import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-book"></span>
                    <h1>
                        Welcome to <strong>Atheneum</strong><br />
                        Trouble free Notebook hosting at scale
                    </h1>
                    <p>
                        Easy, secure, Jupyter notebooks in the cloud.<br />
                        Get started now.
                    </p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">About</a></li>
                        <li><a href="https://atheneumnb.io" className="button">Signup</a></li>
                        <li><a href="https://atheneumnb.io" className="button">Log In</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
