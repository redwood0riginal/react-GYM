import { NavLink} from "react-router-dom"
import "./schedule.css"


const ScheduleNav = () => {
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center mt-5">
  <NavLink to="/schedule/monday" className="btn schedule-btn  rounded-3 text-bold">
    Monday
  </NavLink>

  <NavLink to="/schedule/tuesday" className="btn schedule-btn rounded-3 text-bold">
    Tuesday
  </NavLink>

  <NavLink to="/schedule/wednesday" className="btn schedule-btn rounded-3 text-bold">
    Wednesday
  </NavLink>

  <NavLink to="/schedule/thursday" className="btn schedule-btn rounded-3 text-bold">
    Thursday
  </NavLink>

  <NavLink to="/schedule/friday" className="btn schedule-btn  rounded-3 text-bold">
    Friday
  </NavLink>

  <NavLink to="/schedule/saturday" className="btn schedule-btn  rounded-3 text-bold">
    Saturday
  </NavLink>

</div>

  )
}

export default ScheduleNav