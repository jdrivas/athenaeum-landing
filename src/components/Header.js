import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-book"></span>
                    <h1>
                        Welcome to <strong>Athenaeum</strong><br />
                        Trouble free online notebooks at scale
                    </h1>
                    <p>
                        Easy, secure, online computing and data science with Jupyter notebooks in the cloud.<br />
                        Get started now.
                    </p>
                    <ul className="actions">
                        <li><a href="#overview" className="button scrolly">About</a></li>
                        <li><a href="https://atheneumnb.io" className="button">Signup</a></li>
                        <li><a href="https://atheneumnb.io" className="button">Log In</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
