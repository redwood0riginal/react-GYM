import axios, { Axios } from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userID, setUserID] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    // Check if the user is logged in using localStorage
    const storedIsAuthenticated = localStorage.getItem("isLoggedIn");
    const storedUserID = localStorage.getItem("userId");
    if (storedIsAuthenticated === "true" && storedUserID ) {
      setIsAuthenticated(true);
      setUserID(storedUserID);
      axios
        .get(`http://localhost:3000/users/${storedUserID}`)
        .then((response) => setUser(response.data[0]));
        console.log(user);
    }
  }, [user]);

  console.log(user);
  console.log(userID);


  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setIsAuthenticated(true);
        setUserID(user.id); // Set user ID from the response
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userId", user.id);
        setUser(user);
        setError(null); // Reset error state if login is successful
        return true;
      } else {
        setIsAuthenticated(false);
        setUserID(null);
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("userId", "");

        setError("Invalid email or password"); // Set error message for incorrect login
        return false;
      }
    } catch (error) {
      console.log("Error occurred while logging in:", error.message);
      setIsAuthenticated(false);
      setUserID(null);
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("userId", "");

      setError("An error occurred while logging in");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("userId", "");

  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userID, login, logout, user, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
