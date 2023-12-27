import { useEffect, useState } from "react"; // Import useState from React
import Background from "../background-banner/background";
import ClasseBox from "./classeBox";
import "./classes.css";
import axios from "axios";

const Classes = () => {
  const [classes, setClasses] = useState([]); // Use useState for managing state

  useEffect(() => {
    const res = axios.get("http://localhost:3000/classes");
    res.then((data) => setClasses(data.data));
  }, []);

  return (
    <>
      <Background title={"Classes"} />

      <section
        id="pricing"
        className="pricing-section position-relative mt-5 mb-5"
      >
        <div className="container page-padding py-4">
          {/* title div -- */}
          <div className="d-flex flex-column text-center position-relative align-items-center">
            <h2 className=" title text-3.4rem font-bold mb-4">
              <span>OUR</span> CLASSES
            </h2>
            <p className="text-gray-600 font-medium text-sm">
              Our Gym classes offer dynamic and structured fitness sessions,
              combining cardiovascular exercises
              <br /> strength training, and flexibility routines. Led by
              certified instructors.
            </p>
          </div>
          {/* pricing boxes */}
          <div className="d-flex justify-content-center gap-4 mt-5 flex-wrap">
            {classes.map((gymClass) => (
              <ClasseBox
                key={gymClass.id}
                img={gymClass.classImage}
                title={gymClass.className}
                trainer={gymClass.trainer}
                date={gymClass.schedule}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Classes;
