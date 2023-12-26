import { Outlet } from "react-router-dom";
import Background from "../background-banner/background";
import ScheduleNav from "./scheduleNav";
import "./schedule.css"

function Schedule() {
  return (
    <>
    <Background title={"Schedule"}/>
    <section>
  <div className="login-banner position-relative justify-content-center d-flex mt-4">
    <h1 className=" title-schedule position-absolute bottom-25 text-3 font-bold">
      SCHEDULE <span>BY DAY</span>
    </h1>
  </div>
  <div className="container py-5">
    <div className="row">
      <div className="col">
        <ScheduleNav/>
        <Outlet />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Schedule;
