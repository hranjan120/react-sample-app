import { Link } from 'react-router-dom';
import siteLogo from '../assets/img/logo/logo.png'

export default function HeaderComp() {
    return (
        <>
            <header>

                <div className="header-area header-transparrent">
                    <div className="headder-top header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 col-md-2">

                                    <div className="logo">
                                        <Link to="/"><img src={siteLogo} alt="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-md-9">
                                    <div className="menu-wrapper">

                                        <div className="main-menu">
                                            <nav className="d-none d-lg-block">
                                                <ul id="navigation">
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/about-us">About Us</Link></li>
                                                    <li><Link to="/contact-us">Contact Us</Link></li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div className="header-btn d-none f-right d-lg-block">
                                            <Link className='btn head-btn1' to="/sign-up">Register</Link>
                                            <Link className='btn head-btn2' to="/sign-in">Login</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}