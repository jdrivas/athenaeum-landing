import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/Jupyter-notebook.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="tag" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>
                                    Finally, notebooks as a service.
                                </h2>
                            </header>
                            <p>
                                Keep your data science in the cloud. Python 3 and R available online.
                                Keep as many notebooks as you need, manage data on the notebook file system, 
                                install packages as needed, and never worry about backups, servers, clusters, 
                                containers, auth, or security. 
                                <br />
                                <br />
                                <strong>It's about time.</strong>
                            </p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="overview" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-server"></span></li>
                                <li><span className="icon style3 major fa-cog"></span></li>
                                <li><span className="icon style4 major fa-github"></span></li>
                                <li><span className="icon style5 major fa-shield"></span></li>
                                <li><span className="icon style6 major fa-folder"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Athenaeum Jupyter Notebooks</h2>
                            </header>
                            <p>
                                Everything from enterprise data science to student labs.
                            </p>
                            <p>
                                <strong>Python</strong> supoort includes packages: Pandas, Scipy, Scikit-learn, Scikit-image, 
                                Sqlalchemy  and many others. Also includes Facets and Ipywidgets.
                            </p>
                            <p>
                                <strong> R</strong> support including <a href="www.tidyverse.org">Tidyverse</a> packges, 
                                as wel as devtools, shiny, markdown, caret and many others.
                            </p>
                            <p>
                                Notebooks default to the 
                                <a href="http://jupyter-docker-stacks.readthedocs.io/en/latest/using/selecting.html#jupyter-datascience-notebook"> jupyter/datascience-notebook. </a> < br/>
                                Install additional packages as needed<br /> 
                                <strong>Coming soon:</strong> Spark, Tensorflow and JupyterLab!<br />
                                Git installed and full git GUI-based for easy github integration coming. 
                                Depending on plan, storage and CPU requirements are easily tailored.
                                Shared data storage coming.
                            </p>
                            <p>
                               Servers are securely isolated from each other ensuring and connections are HTTPS.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="plans" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Plans and Pricing</h2>
                            </header>
                            <h3>Limited Introductory Pricing</h3>
                            <p>Get your notebooks in the cloud now!</p>
                        </div>

                        <div className="col-4">
                            {/* <span className="image fit"><img src={pic02} alt="" /></span> */}
                            <h3>Student and Individual</h3>
                            <p>
                                With 10GB of storage, 1MB of notebook server memory.
                                A perfect solution for personal projects, labs, and getting started.
                            </p>
                            <ul className="actions">
                                <li><a href="#" className="button">Free</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            {/* <span className="image fit"><img src={pic03} alt="" /></span> */}
                            <h3>Data Scientist</h3>
                            <p>Adipiscing a commodo ante nunc magna lorem et interdum mi ante nunc lobortis non amet vis sed volutpat et nascetur.</p>
                            <ul className="actions">
                                <li><a href="#" className="button">$25 / Month</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            {/* <span className="image fit"><img src={pic04} alt="" /></span> */}
                            <h3>Enterprise</h3>
                            <p>
                                Deployed in a pricate cloud and 
                                including multiple bespoke managed notebook images and CPU/Memory/Storage profiles.
                            </p>
                            <ul className="actions">
                                <li><a href="#" className="button">Contact Us</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Get started now!</h2>
                        </header>
                        <p>Isn't it time to stop wasting time managing your notebook servers?</p>
                        <ul className="actions uniform">
                            <li><a href="https://atheneumnb.io" className="button special">Sign Up</a></li>
                            <li><a href="https://atheneumnb.io" className="button special">Log In</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;