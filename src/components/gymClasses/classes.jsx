import Background from "../background-banner/background";
import ClasseBox from "./classeBox";

import "./classes.css";

const Classes = () => {
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
            <ClasseBox
              img="cycling-bg"
              title="Cycling"
              trainer="Dorian Yate"
              date="Wed: 9:00 am"
            />
            <ClasseBox
              img="meditation-bg"
              title="Meditation"
              trainer="Maria Mich"
              date="FRi: 9:00 am"
            />{" "}
            <ClasseBox
              img="box-bg"
              title="Boxing"
              trainer="John Flex"
              date="Tue: 4:00 pm"
            />{" "}
            <ClasseBox
              img="karate-bg"
              title="Karate"
              trainer="David Rich"
              date="Sat: 9:00 am"
            />{" "}
            <ClasseBox
              img="powerlift-bg"
              title="Power Lifting"
              trainer="Larry Wheels"
              date="Mon: 5:00 pm"
            />{" "}
            <ClasseBox
              img="workout-bg"
              title="Workout"
              trainer="Shawn Ray"
              date="Sun: 10:00 am"
            />{" "}
            <ClasseBox
              img="crossfit-bg"
              title="Crossfit"
              trainer="Jenifer Alex"
              date="Wed: 12:00 pm"
            />{" "}
            <ClasseBox
              img="running-bg"
              title="Running"
              trainer="Zinia Zessy"
              date="Fri: 7:00 am"
            />{" "}
            <ClasseBox
              img="bodybuilding-bg"
              title="Body Building"
              trainer="Jake Paul"
              date="Mon: 9:00 pm"
            />{" "}
            <ClasseBox
              img="mma-bg"
              title="Mma"
              trainer="Becky Lynch"
              date="Fri: 8:00 am"
            />{" "}
            <ClasseBox
              img="yoga-bg"
              title="Yoga"
              trainer="Marta Mich"
              date="Wed: 9:00 am"
            />{" "}
            <ClasseBox
              img="fitness-bg"
              title="Fitness"
              trainer="Adama Traore"
              date="Sat: 15:00 pm"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Classes;
