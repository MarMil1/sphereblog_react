import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './about.css'

export default function About() {
    return (
        <div className="component-container">
            <Navbar />
            <div className="about-container">
                <div className="bounding-container">
                    <div className="slogan-statement-container">
                        <div className="slogan-container">
                            READ.WRITE.CONNECT
                        </div>
                        <div className="statement-container">
                            Write articles and share your stories with anyone at anytime.
                            Post comments and tell others what you think. 
                            Be in control of the content you post.
                        </div>
                    </div>

                    <div className="app-info-container">
                        <div className="app-info-item">
                            <div className="app-info-item-value">10</div>
                            <div className="app-info-item-title">Comments</div>
                        </div>
                        <div className="app-info-item">
                            <div className="app-info-item-value">20</div>
                            <div className="app-info-item-title">Articles</div>
                        </div>
                        <div className="app-info-item">
                            <div className="app-info-item-value">30</div>
                            <div className="app-info-item-title">Users</div>
                        </div>
                    </div>

                    <div className="socials-section"> 
                        <div className="follow-me-title">
                            Follow me on
                        </div>
                        <div className="footer-content-3 about-social-icons">
                            <a href="https://github.com/MarMil1/sphereblog"><i className="fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/marko-milosavljevic/"><i className="fab fa-linkedin"></i></a>
                            <a href="https://codepen.io/marmil1"><i className="fab fa-codepen"></i></a>
                        </div>
                    </div>

                    <div className="about-promo-section">  
                        <div className="about-promo-item">
                            <div className="promo-item-title">
                                Sign Up
                            </div>
                            <div className="promo-item-content">
                                Sign up and gain access to connect with other users 
                                through their stories and through their comments.
                            </div>
                            
                        </div>
                        <div className="about-promo-item">
                            <div className="promo-item-title">
                                Write
                            </div>
                            <div className="promo-item-content">
                                Gain access to creating, posting your content 
                                and sharing your thought and experiences.
                            </div>
                        </div>
                        <div className="about-promo-item">
                            <div className="promo-item-title">
                                Content
                            </div>
                            <div className="promo-item-content">
                                Choose what you want to write as long as you are 
                                being respectful to everyone on the platform.
                            </div>
                        </div>
                        <div className="about-promo-item">
                            <div className="promo-item-title">
                                Read
                            </div>
                            <div className="promo-item-content">
                                Read about other people's journeys through their life, 
                                their interests and their lessons learned.
                            </div>
                        </div>
                        <div className="about-promo-item">
                            <div className="promo-item-title">
                                Comment
                            </div>
                            <div className="promo-item-content">
                                Share a comment on to yours or other user's articles. 
                                Give a feedback and an insight to what you read.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
