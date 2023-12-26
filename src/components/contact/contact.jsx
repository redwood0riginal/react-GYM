import { GoTop } from "../../utils/helpers";
import Background from "../background-banner/background";
import "./contact.css";

import { faEnvelope, faMapMarker, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contact = () => {
  return (
    <>
    <Background title={"Contact US"}/>
    <section className="contact-section spad"> 
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title contact-title">
              <span>Contact Us</span>
              <h2>GET IN TOUCH</h2>
            </div>
            <div className="contact-widget">
              <div className="cw-text">
                 <FontAwesomeIcon icon={faMapMarker} style={{fontSize:"45px", color:"#f36100"}}/>
                <p>
                  111 Hay Hassani Rd, nejma,
                  <br /> CASABLANCA
                </p>
              </div>
              <div className="cw-text">
                 <FontAwesomeIcon icon={faMobile} style={{fontSize:"45px", color:"#f36100"}}/>
                <ul className="telephone">
                  <li>+212-662-477-882</li>
                  <li>+212-719-186-568</li>
                </ul>
              </div>
              <div className="cw-text email">
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"45px", color:"#f36100"}}/>
                <p>Support.ajgym@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="leave-comment">
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Website" />
                <textarea placeholder="Comment"></textarea>
                <button type="submit" onClick={GoTop}>Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1572675.7595829577!2d-105.02573624935042!3d39.65798807664909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c5fe2e6306ccd%3A0xa6b400a73beef706!2sDenver%20County%2C%20Denver%2C%20CO%2C%20USA!5e0!3m2!1sen!2srs!4v1673981026796!5m2!1sen!2srs"
            allowFullScreen=""
            loading="lazy"
            samesite="Strict"
            title="map"
            style={{ width: "100%", height: "45rem", border: "0px" }}
          ></iframe>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;
