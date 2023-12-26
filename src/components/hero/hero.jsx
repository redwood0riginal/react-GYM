import "./hero.css";
import vd from "../.././assets/gym-video.mp4";
import { GoTop } from "../../utils/helpers";
import { Link } from "react-router-dom";
const hero = () => {
  return (
    <div className="main">
      <video className="bg-video" autoPlay muted loop>
        <source src={vd} />
      </video>
      <div className="video-overlay">
        <div className="caption">
          <h6>work harder, get stronger</h6>
          <h2>
            easy with our <em>gym</em>
          </h2>
          <div className="main-button scroll-to-section">
            <Link to="login" className="member-btn" onClick={GoTop}>
              Become a member
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
