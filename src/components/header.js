import React, { useRef, useLayoutEffect } from 'react';
import { useState } from 'react';
import logo from '../assets/images/logo.svg'

const Header = () => {
    // sicky Header
    const stickyHeader = useRef()
    useLayoutEffect(() => {
        const mainHeader = document.getElementById('mainHeader')
        let fixedTop = stickyHeader.current.offsetTop
        const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
            mainHeader.classList.add('sticky')
        } else {
            mainHeader.classList.remove('sticky')
        }
        }
        window.addEventListener('scroll', fixedHeader)
    }, [])

    // Menu Btn
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        
        <header className='header' id="mainHeader" ref={stickyHeader}>
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
                                    <a href="#view">Overview</a>
                                </li>
                                <li>
                                    <a href="#obj">Objectives</a>
                                </li>
                                <li>
                                    <a href="#key">Key Messages</a>
                                </li>
                                <li>
                                    <a href="#agenda">Agenda</a>
                                </li>
                                <li>
                                    <a href="#registration">Register now</a>
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