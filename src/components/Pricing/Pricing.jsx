import BgText from "../.././assets/img/pricing/bg-text.png";
import BgDumbell from "../../assets/img/pricing/bg-dumbell.png";
import PricingBox from "./PricingBox";

import Img1 from "../.././assets/img/pricing/img1.jpg";
import Img2 from "../.././assets/img/pricing/img2.jpg";
import Img3 from "../.././assets/img/pricing/img3.jpg";

import "./pricing.css";

function Pricing() {
  return (
    <>
      <section id="pricing" className="pricing-section position-relative">
        <div className="container page-padding py-5">
          <img src={BgText} className="left-0 position-absolute" alt="bg_img" />
          {/* title div -- */}
          <div className="d-flex flex-column text-center position-relative align-items-center">
            <p className="pricing-chart position-relative  z-10 text-sm text-uppercase font-bold mb-4">
              PRICING <span>CHART</span> 
            </p>
            <h2 className="text-3.4rem font-bold mb-4">
              Exclusive Pricing Plan
            </h2>
            <p className="text-gray-600 font-medium text-sm">
              Gym at an unknown printer took a galley of type and scrambled
              <br /> make a type specimen book.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
            <PricingBox img={Img1} price="39" />
            <PricingBox img={Img2} price="65" />
            <PricingBox img={Img3} price="100" />
          </div>
          <img
            src={BgDumbell}
            alt="bg_icon"
            className="left-0 bottom-0 position-absolute"
          />
        </div>
      </section>
    </>
  );
}

export default Pricing;
