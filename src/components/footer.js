import React from 'react';
import logo from '../assets/images/logo.svg'
import Facebook from '../assets/images/facebook.svg'
import Twitter from '../assets/images/twitter.svg'
import Instagram from '../assets/images/instagram.svg'
import Linkedin from '../assets/images/linkedin.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='navigation'>
                            <ul>
                                <li>
                                    <a href="#">Faqs</a>
                                </li>
                                <li>
                                    <a href="#">Career</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Term of use</a>
                                </li>
                                <li>
                                    <a href="#">Press Kit</a>
                                </li>
                                <li>
                                    <a href="#">Reports</a>
                                </li>
                                <li>
                                    <a href="#">Overview</a>
                                </li>
                            </ul>
                        </div>
                    </div>    
                    <div className='col-lg-6'>    
                       <div className='row'>
                            <div className='col-md-9'>
                                <div className='subscribe'>
                                    <div className='form'>
                                        <h6>Sign up for our Newsletter</h6>
                                        <form>
                                            <div className="field-wrap half">
                                                <input type="email"
                                                    placeholder='Email Address'
                                                />
                                            </div>
                                            <div className="field-wrap submit">
                                                <input className="btn" type="submit" value="Sign me up"></input>
                                            </div>
                                            
                                        </form>
                                        <p>
                                            We'd love to welcome you at Hub71<br />
                                            Al Khatem Tower - 15th Floor ADGM Square, Al Maryah <br />
                                            Island Abu Dhabi - United Arab Emirates <a href="#">Contact us</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='social'>
                                    <h6>Hub71 Social</h6>
                                    <ul>
                                        <li>
                                            <a href="#" target='_blank'>
                                            <img src={Facebook} alt='icon'></img>
                                            Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target='_blank'>
                                            <img src={Twitter} alt='icon'></img>
                                            Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target='_blank'>
                                            <img src={Instagram} alt='icon'></img>
                                            Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" target='_blank'>
                                            <img src={Linkedin} alt='icon'></img>
                                            Linkedin
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='copyright'>    
                            <div className='logo'>
                                <a href='/'><img src={logo} alt='Logo'></img></a>
                                <h6>Powered by mubadala</h6>    
                            </div>  
                            <div className='Text'>
                                <p>copyright &copy; 2023 Hub71. All rights reserved.</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
