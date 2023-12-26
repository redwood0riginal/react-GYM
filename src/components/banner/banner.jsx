import { Link } from "react-router-dom";
import { GoTop } from "../../utils/helpers";
import "./banner.css";

const Banner = () => {

  return (
    <section className="banner-section" >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="bs-text">
              <h2>Registration now to get more deals</h2>
              <div className="bt-tips">Where health, beauty and fitness meet.</div>
              <Link to="/classes" className="primary-btn btn-normal" onClick={GoTop}>Appointment</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
