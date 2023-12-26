import "./pricing.css";

function PricingBox({ img, price }) {
  return (
    <>
      <div className="col-md-3 col-12 bg-white shadow-xl position-relative z-3">
        <div className="position-relative grayscale hover:grayscale-0">
          <img src={img} alt="pricing_img" className="w-100" />
          <div className="position-absolute bg-white text-4xl font-bold w-75 text-center py-2 text-dark bottom-0 start-50 translate-middle-x">
            Beginners
          </div>
        </div>
        <div className="d-flex flex-column align-items-center pt-3 pb-5">
          {/* price */}
          <p className="text-center display-3 font-bold relative py-2">
            <span className=" dollar text-lg text-gray-600 absolute font-normal top-0 start-0">
              $
            </span>
            {price}
            <span className=" per-month text-sm text-gray-600 absolute font-normal bottom-0 end-0">
              p/m
            </span>
          </p>
          {/* text */}
          <div className="d-flex flex-column text-xl font-bold text-center gap-2 text-gray-600">
            <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>Personal Trainer</p>
            <p>Cycling</p>
          </div>
          <button className="btn purchase-btn">Purchase Now</button>
        </div>
      </div>
    </>
  );
}

export default PricingBox;
