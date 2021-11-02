import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './help.css'

export default function Help() {
    return (
        <div className="component-container">
            <Navbar />
            <div className="help-container">
                <div className="bounding-container">
                    <div className="help-container">
                        <div className="help-faq-title">FAQs</div>
                        <div className="help-questions">
                            <div className="help-question">
                                <div className="help-question-title">How do I sign up?</div>
                                <div className="help-answer">You can sign up by clicking on the green "SIGN UP FOR FREE" button in 
                                                        the upper right corner of you browser window, where all articles are posted.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">How do I log in?</div>
                                <div className="help-answer">You can log in by clicking on the "Log In" button in the navigation 
                                                        bar at the top of your browser window.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Is having an account and posting articles for free?</div>
                                <div className="help-answer">Registering to our website will always be free and users will never 
                                                        be charged for creating any content.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I write an article?</div>
                                <div className="help-answer">Once you are logged in to your profile you can create an article 
                                                        by clicking on "Write" button from the navigation menu at the top 
                                                        of your browser window.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I post an article?</div>
                                <div className="help-answer">You can post an article by clicking on "Publish" button below 
                                                        write/edit article page.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I edit my article?</div>
                                <div className="help-answer">You can edit your article by clicking on "Edit" button which 
                                                        will appear when hovering over the three dots icon to the right 
                                                        of the article.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I delete my article?</div>
                                <div className="help-answer">You can delete your article by clicking on "Delete" button which 
                                                        will appear when hovering over the three dots icon to the right 
                                                        of the article.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I view article comments?</div>
                                <div className="help-answer">You can view all article comments by clicking on the comment icon 
                                                        located below article.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I post a comment?</div>
                                <div className="help-answer">You can post a comment by clicking on the "Post" button in 
                                                        below text input area.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I edit my comment?</div>
                                <div className="help-answer">You can edit your comment by clicking on "Edit" button which 
                                                        will appear when hovering over the three dots icon to the right 
                                                        of each comment.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I delete a comment?</div>
                                <div className="help-answer">You can delete a comment by clicking on "Delete" button which 
                                                        will appear when hovering over the three dots icon to the right 
                                                        of each comment.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I delete all my articles?</div>
                                <div className="help-answer">You can delete all your articles by clicking on the "Delete All Articles" 
                                                        button in the settings page which can be found hovering on your initial 
                                                        in the upper right corner of your browser window.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I delete all my comments?</div>
                                <div className="help-answer">You can delete all your comments by clicking on the "Delete All Comments" 
                                                        button in the settings page which can be found hovering on your initial 
                                                        in the upper right corner of your browser window.</div>
                            </div>
                            <div className="help-question">
                                <div className="help-question-title">Can I delete my account?</div>
                                <div className="help-answer">You can delete your account by clicking on the "Delete User Profile" 
                                                        button in the settings page which can be found hovering on your initial 
                                                        in the upper right corner of your browser window.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
