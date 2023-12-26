import "./classes.css";

import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

const ClasseBox = ({ img, title, trainer, date }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const storedUserID = localStorage.getItem("userId");
    if (storedUserID) {
      setUserID(storedUserID);

      const res = axios.get(`http://localhost:3000/users/${storedUserID}`);
      res.then((data) => setBookings(data.data.bookings));
    }
  }, []);

  const addToBookings = (title) => {
    if (!isAuthenticated) {
      alert("Please login first!");  }
      else if (!bookings.includes(title)) {
      const updatedBookings = [...bookings, title];

      axios
        .patch(`http://localhost:3000/users/${userID}`, { bookings: updatedBookings })
        .then((res) => {
          console.log(res.data);
          console.log("Booking added");
          alert("Your Gym classes added successfuly")
          setBookings(updatedBookings);
        })
        .catch((error) => {
          console.error("Error adding booking:", error);
        });
      }
  
  };

  return (
    <>
      <div
        className={` ${img} rounded-3 shadow-2 mb-4 d-flex flex-column justify-content-end align-items-start  classes-img  relative p-4 `}
      >
        <span className="bg-black-50 rounded-3 w-full h-full absolute top-0 left-0"></span>

        <div className="d-flex flex-column position-relative z-2 ">
          <p className=" mb-3 classes-title">{title}</p>

          <span className="bg-danger w-50 h-4"></span>

          <div className="d-flex gap-1 mb-1 mt-1   ">
            <p className="trainer">
              <FontAwesomeIcon icon={faUser} className="classes-trainer" /> {trainer}
            </p>
            <p className="date">
              <FontAwesomeIcon icon={faClock} className="classes-date" /> {date}
            </p>
          </div>

          <Link to="" className="btn classes-btn" onClick={() => addToBookings(title)}>
            join now
          </Link>
        </div>
      </div>
    </>
  );
};

export default ClasseBox;
