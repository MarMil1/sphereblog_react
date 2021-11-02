import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import './navbar.css'

export default function Navbar() {
    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    
    // On window scroll
    let previousScroll = window.pageYOffset;
    window.onscroll = function() {
        const currentScroll = window.pageYOffset;
        let navbar = document.getElementById("navbar-container");
        let toTopButton = document.getElementById('goto-top-button');
        
        // Toggle navbar
        if (previousScroll > currentScroll) {
            navbar.style.top = "0";
            
        } else {
            navbar.style.top = "-60px";
            
        }
        previousScroll = currentScroll;
        
        // Toggle to top button
        if (currentScroll > 60) {
            toTopButton.style.display = "block";
        } else {
            toTopButton.style.display = "none";
        }
    }

    // Scroll to top button 
    const scrollUpButtton = () => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className="navbar-container" id="navbar-container">
            <div className="navbar-logo-container">
                <div className="navbar-logo">
                    <Link className="link" to="/home">
                        <div>
                            sphere_blog   
                        </div>
                    </Link>
                </div>
            </div>
            {user ? 
            <div className="navbar-links">  
                <div className="navbar-link responsive-link" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </div>
            </div> 
            :
            <div className="navbar-links">
                <div className="navbar-link responsive-link">
                    <Link className="link" to="/home">
                        <div>
                            Read     
                        </div>
                    </Link>
                </div>
                <div className="navbar-link responsive-link">
                    <Link className="link" to="/write">
                        <div>
                            Write  
                        </div>
                        
                    </Link>
                </div>
                <div className="navbar-link responsive-link">
                    <Link className="link" to="/about">
                        <div>
                            About     
                        </div>
                    </Link>
                </div>
                <div className="navbar-link responsive-signin-button">
                    <Link className="link" to="/login">
                        <div>
                            Sign In
                        </div>
                        
                    </Link>
                </div>
                <Link className="link" to="/signup">
                    <div className="navbar-link signup-button">
                        <div>
                            Get Started  
                        </div>
                    </div>
                </Link>
            </div>
            }
            <div className="goto-top-button" id="goto-top-button" onClick={scrollUpButtton}>
                <i className="fas fa-chevron-up fa-lg"></i>
            </div>
        </div>
    )
}
