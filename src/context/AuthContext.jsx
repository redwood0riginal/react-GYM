import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userID, setUserID] = useState(null);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const storedIsAuthenticated = localStorage.getItem("isLoggedIn");
    const storedUserID = localStorage.getItem("userId");

    if (storedIsAuthenticated === "true" && storedUserID) {
      axios
        .get(`http://localhost:3000/users/${storedUserID}`)
        .then((response) => {
          const userData = response.data[0];
          setUser(userData);
          setIsAdmin(userData.role === "admin");
          setIsAuthenticated(true);
          setUserID(storedUserID);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

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
        setUserID(user.id);
        setIsAdmin(user.role === "admin"); // Update isAdmin based on the user's role
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userId", user.id);
        localStorage.setItem("isAdmin", user.role === "admin" ? "true" : "false");
        setUser(user);
        setError(null);
        return true;
      } else {
        setIsAuthenticated(false);
        setUserID(null);
        setIsAdmin(false);
        localStorage.setItem("isLoggedIn", "false");
        localStorage.setItem("userId", "");
        localStorage.setItem("isAdmin", "false");
        setError("Invalid email or password");
        return false;
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error.message);
      setIsAuthenticated(false);
      setUserID(null);
      setIsAdmin(false);
      localStorage.setItem("isLoggedIn", "false");
      localStorage.setItem("userId", "");
      localStorage.setItem("isAdmin", "false");
      setError("An error occurred while logging in");
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserID(null);
    setIsAdmin(false);
    localStorage.setItem("isLoggedIn", "false");
    localStorage.setItem("userId", "");
    localStorage.setItem("isAdmin", "false");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userID, isAdmin, login, logout, user, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
