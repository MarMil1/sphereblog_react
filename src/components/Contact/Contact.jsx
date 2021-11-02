import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './contact.css'

export default function Contact() {
    return (
        <div className="component-container">
        <Navbar />
            <div className="contact-container">
                <div className="container">
                    <form action="/">
                        <label htmlFor="name">Your name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Enter your name.."
                        />

                        <label htmlFor="email">Your email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email.."
                        />

                        <label htmlFor="subject">Say hello</label>
                        <textarea 
                            id="subject" 
                            name="subject" 
                            placeholder="Write something.." 
                            height="200px"
                        ></textarea>

                        <input 
                            type="submit" 
                            value="Send"
                        />
                    </form>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}
