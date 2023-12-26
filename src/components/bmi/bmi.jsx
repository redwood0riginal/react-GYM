import { useState } from "react";
import "./bmi.css";

function BmiCalc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height) || weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi.toFixed(1));

      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
   
  };

  return (
    <>
     <section className="bmi-section py-5 relative">
  <div className="container page-padding">
    <div className="text-white w-52rem min-620:w-100 relative">
      <h2 className="text-4xl font-bold leading-1.1 mb-8">
        Let`s Calculate Your <span className="bmi-text">BMI</span>
      </h2>
      <p className="text-sm text-light min-620:text-white">
        Easily determine your body mass index with our accurate calculation tool.
      </p>
      <div className="flex flex-col">
        <form className="flex w-full gap-3 h-10 mb-4 mt-10">
          <input
            onChange={(e) => setWeight(e.target.value)}
            className="w-1/2 form-control-sm bg-transparent text-sm border-2 border-light me-5 pl-3 text-light"
            type="text"
            placeholder="Weight / kg"
          />
          <input
            onChange={(e) => setHeight(e.target.value)}
            className="w-1/2 form-control-sm bg-transparent text-sm border-2 border-light pl-3 text-light"
            type="text"
            placeholder="Height / cm"
          />
        </form>
        <p className="mt-10 gap-3 text-sm font-medium flex items-center w-full">
          <span className="w-1/2">
            Your BMI is: &nbsp;
            <span className="bmi-output">{bmi}</span>
          </span><br />
          <span className="w-1/2">
            Your weight is: &nbsp;
            <span className="msg-output">{message}</span>
          </span>
        </p>

        <button
          onClick={calcBmi}
          style={{ transition: "all 0.3s" }}
          type="submit"
          className="text-sm text-uppercase font-bold mt-10 btn calculate"
        >
          Calculate
        </button>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default BmiCalc;
