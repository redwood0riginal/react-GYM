import Background from "../background-banner/background";
import "./about.css";

const About = () => {
  return (
    <>
      <Background title={"About Us"} />
      {/* About US Section Begin  */}
      <section className="aboutus-section mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="about-video set-bg"
                data-setbg="img/about-us.jpg"
              ></div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="about-text">
                <div className="section-title">
                  <span>About Us</span>
                  <h2 className="text-light">What we have done</h2>
                </div>
                <div className="at-desc">
                  <p >
                    At our gym, we've curated a dynamic fitness experience that
                    goes beyond conventional workouts. Our site showcases a
                    diverse range of gym classes led by certified instructors,
                    integrating invigorating cardiovascular exercises.Explore the synergy of expert guidance and
                    motivating group sessions as we strive to elevate your
                    fitness journey to new heights.
                  </p>
                </div>
                <div className="about-bar d-sm-none-custom">
                  <div className="ab-item">
                    <p>Body building</p>
                    <div id="bar1" className="barfiller">
                      <span className="fill" data-percentage="80"></span>
                      <div className="tipWrap">
                        <span className="tip"></span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Training</p>
                    <div id="bar2" className="barfiller">
                      <span className="fill" data-percentage="85"></span>
                      <div className="tipWrap">
                        <span className="tip"></span>
                      </div>
                    </div>
                  </div>
                  <div className="ab-item">
                    <p>Fitness</p>
                    <div id="bar3" className="barfiller">
                      <span className="fill" data-percentage="75"></span>
                      <div className="tipWrap">
                        <span className="tip"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About US Section End --> */}
    </>
  );
};

export default About;
