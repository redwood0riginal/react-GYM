import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Profile = () => {
  const {  userID  } = useContext(AuthContext);
  const [user, setUser] = useState({});

useEffect(()=>{
  if(userID){
  const res = axios.get(`http://localhost:3000/users/${userID}`)
  res.then(data => setUser(data.data))
}},[userID])

  console.log(userID);
  console.log(user);

  return (
    <div>
      <h1>Your Profile</h1>
      {user.role == "member" && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <h2>Your Bookings:</h2>
          <ul>
            {user.bookings.map((booking, index) => (
              <li key={index}>{booking}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
