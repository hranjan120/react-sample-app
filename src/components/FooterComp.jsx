import siteLogo from '../assets/img/logo/logo2_footer.png'
import formIcon from '../assets/img/icon/form.png'

export default function FooterComp() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer>

                <div className="footer-area footer-bg footer-padding">
                    <div className="container">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="single-footer-caption mb-30">
                                        <div className="footer-tittle">
                                            <h4>About Us</h4>
                                            <div className="footer-pera">
                                                <p>Heaven frucvitful doesnt cover lesser dvsays appear creeping seasons so behold.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Contact Info</h4>
                                        <ul>
                                            <li>
                                                <p>Address :Your address goes
                                                    here, your demo address.</p>
                                            </li>
                                            <li><a href="#">Phone : +8880 44338899</a></li>
                                            <li><a href="#">Email : info@colorlib.com</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Important Link</h4>
                                        <ul>
                                            <li><a href="#"> View Project</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                            <li><a href="#">Testimonial</a></li>
                                            <li><a href="#">Support</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Newsletter</h4>
                                        <div className="footer-pera footer-pera2">
                                            <p>Heaven fruitful  over lesser in days. Appear creeping.</p>
                                        </div>

                                        <div className="footer-form" >
                                            <div id="mc_embed_signup">
                                                <form target="_blank" action=""
                                                    method="get" className="subscribe_form relative mail_part">
                                                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address"
                                                        className="placeholder hide-on-focus" />
                                                    <div className="form-icon">
                                                        <button type="submit" name="submit" id="newsletter-submit"
                                                            className="email_icon newsletter-submit button-contactForm"><img src={formIcon} alt="" /></button>
                                                    </div>
                                                    <div className="mt-10 info"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row footer-wejed justify-content-between">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">

                                <div className="footer-logo mb-20">
                                    <a href="index.html"><img src={siteLogo} alt="Logo" /></a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="footer-tittle-bottom">
                                    <span>5000+</span>
                                    <p>Talented Hunter</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                                <div className="footer-tittle-bottom">
                                    <span>451</span>
                                    <p>Talented Hunter</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">

                                <div className="footer-tittle-bottom">
                                    <span>568</span>
                                    <p>Talented Hunter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area footer-bg">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-xl-10 col-lg-10 ">
                                    <div className="footer-copy-right">
                                        <p>
                                            Copyright &copy; {currentYear} All rights reserved | Made with Love by React
                                        </p>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2">
                                    <div className="footer-social f-right">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fas fa-globe"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}