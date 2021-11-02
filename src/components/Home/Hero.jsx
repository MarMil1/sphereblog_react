import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-item first-slogan">
                    Share your stories and reach the world.
                </div>
                <div className="hero-item second-slogan">
                    Writing and reading stories from all over the world has never been easier.
                </div>
                <Link className="link" to="/login">
                    <div className="hero-item get-started">
                        START WRITING
                    </div>
                </Link>
            </div>
        </div>
    )
}
