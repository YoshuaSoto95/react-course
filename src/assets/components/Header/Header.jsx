import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='content'>
                <div className="logo">
                    <h1 className='title-header'>Logo<span>React</span></h1>
                </div>
                <nav className="nav">
                    <a href="#start" className='nav_link'>Start</a>
                    <a href="#about" className='nav_link'>About</a>
                    <a href="#contact" className='nav_link'>Contact</a>
                </nav>
                <div>
                    <a href="#login" className="cta_nav">Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header