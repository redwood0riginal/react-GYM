import "./footer.css"
import logo from "../.././assets/logo2.png";
import { Link } from "react-router-dom";
// font awesome icons
import {
    faFacebookF,
    faGithub,
    faInstagram,
    faLinkedin,
    faTwitter,
    
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelope,faHeart
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoTop } from "../../utils/helpers";

  const newYear = new Date().getFullYear()
const Footer = () => {
  return (
    <section className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="fs-about">
                        <div className="fa-logo">
                            <Link to="/" onClick={GoTop}><img src={logo} alt=""/></Link>
                        </div>
                        <p>Fuel your fire, sculpt your desire. Unleash the beast within at your favourite GYM – where strength meets determination for a powerhouse transformation!</p>
                        <div className="fa-social">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>
                            <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="fs-widget">
                        <h4>Useful links</h4>
                        <ul>
                            <li><Link to="about" onClick={GoTop}>About</Link></li>
                            <li><Link to="classes" onClick={GoTop}>classes</Link></li>
                            <li><Link to="schedule/monday" onClick={GoTop}>schedule</Link></li>
                            <li><Link to="contact" onClick={GoTop}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6">
                    <div className="fs-widget">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="login" onClick={GoTop}>Login</Link></li>
                            <li><Link to="profile" onClick={GoTop}>My account</Link></li>
                            <li><Link to="contact" onClick={GoTop}>Subscribe</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="fs-widget">
                        <h4>Tips &amp; Guides</h4>
                        <div className="fw-recent">
                            <h6>Establish achievable targets to stay motivated and track your progress.</h6>
                            <ul>
                                <li>Set Realistic Goals</li>
                            </ul>
                        </div>
                        <div className="fw-recent">
                            <h6>Embrace the process of self-improvement. Celebrate small victories and stay positive.</h6>
                            <ul>
                                <li>Enjoy the Journey</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="copyright-text">
                        <p>Copyright&copy; {newYear} All rights reserved | This is made with <FontAwesomeIcon className="heart-icon" icon={faHeart} /> by AJ</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
