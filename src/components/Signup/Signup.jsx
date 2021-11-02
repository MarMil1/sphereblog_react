import React from 'react'
import './signup.css'
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const handleSubmit = (e) => {
        axios.post("http://localhost:8000/api/v1/registrations", {
            user: {
                username: username,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }
        },
        { withCredentials: true }
        ).then(response => {
            if (response.data.status === 'created') {
                response.data && window.location.replace("/login");
                console.log("Response registration: ", response);
            }

        }).catch(error => {
            console.log("Registration error: ", error)
        })
        e.preventDefault();
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <div className="signin-signout-logo">sphere_blog</div>
                <div className="input-form-title">Sign up</div>
                <div className="input-form-fields">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field-box">
                            <input 
                                className="input-field input-email-space"
                                name="username" 
                                placeholder="Enter your username..." 
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field-box">
                            <input 
                                className="input-field input-email-space"
                                type="email" 
                                name="email" 
                                placeholder="Enter your email..." 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field-box">
                            <input 
                                className="input-field input-email-space"
                                type="password" 
                                name="password" 
                                placeholder="Enter your password..." 
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-field-box">
                            <input
                                className="input-field" 
                                type="password" 
                                name="password" 
                                placeholder="Confirm your password..." 
                                value={passwordConfirmation}
                                onChange={e => setPasswordConfirmation(e.target.value)}
                                required
                            />
                        </div>
                        <div className="no-account-login-box">
                            <div className="no-account-login">Already signed up? </div>
                            
                            <Link className="no-account-login create-account" to="/login">
                                    Log in!
                            </Link>
                        </div>
                        <button
                            className="submit-button" 
                            type="submit"
                        >Sign up</button>
                    </form>
                </div>
            </div>
            <div className="login-signup-footer">
                <div className="login-signup-footer-space footer-space-copyright">sphere_blog &#169; 2021</div>
                <div className="login-signup-footer-space">
                    <div className="footer-space-between">Terms of use</div>
                    <div>Privacy & cookies</div>
                </div>
                
            </div>
        </div>
    )
}
