import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-menu">
                <Link className="link" to="/about">
                    <div>
                        About
                    </div>
                </Link>
                <Link className="link" to="/contact">
                    <div>
                        Contact
                    </div>
                </Link>
                <Link className="link" to="/help">
                    <div>
                        Help
                    </div>
                </Link>
            </div>
            <div className="footer-content-1">
                &#169;2021 Marko Milosavljevic 
            </div>
            <div className="footer-content-2">
                <Link className="link" to="/home">
                    <div>
                        sphere_blog
                    </div>
                    <div className="footer-content-2-slogan">
                        read.write.connect
                    </div>
                </Link>
            </div>
            <div className="footer-content-3">
                <a href="https://github.com/MarMil1/sphereblog"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/marko-milosavljevic/"><i className="fab fa-linkedin"></i></a>
                <a href="https://codepen.io/marmil1"><i className="fab fa-codepen"></i></a>
            </div>
        </div>
    )
}
