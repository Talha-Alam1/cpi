import React from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.svg'

const Header = () => {
    
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <header className='header'>
            <div className='container'>
                <div className='d-flex'>
                    <div className='logo'>
                        <a href='/'><img src={logo} alt='Logo'></img></a>
                    </div>
                    <div className='menu-wrap'>
                        <button className='btn'>Register now</button>
                        <button className={ isNavExpanded ? "hamburger open" : "hamburger" } onClick={() => { setIsNavExpanded(!isNavExpanded); }} >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>

                        <nav className={ isNavExpanded ? "menu expanded" : "menu" }>
                            <ul>
                                <li>
                                    <a href="#">Overview</a>
                                </li>
                                <li>
                                    <a href="#">Objectives</a>
                                </li>
                                <li>
                                    <a href="#">Key Messages</a>
                                </li>
                                <li>
                                    <a href="#">Agenda</a>
                                </li>
                                <li>
                                    <a href="#">Register now</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;