import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { generateUUID, currentDate } from "../../utils/helpers";
import "./signUp.css";

const SignUp = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword } = formData;

    if (name && email && phone && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          // Check if email is already used
          const emailCheckResponse = await axios.get(
            `http://localhost:3000/users?email=${email}`
          );
          if (emailCheckResponse.data.length > 0) {
            alert("Email is already used.");
            return;
          }

          // Check if phone is already used
          const phoneCheckResponse = await axios.get(
            `http://localhost:3000/users?phone=${phone}`
          );
          if (phoneCheckResponse.data.length > 0) {
            alert("Phone number is already used.");
            return;
          }

          // If both email and phone are unique, proceed with registration
          const userData = {
            id: generateUUID(),
            role: "member",
            name: name,
            email: email,
            phone: phone,
            password: password,
            created_at: currentDate(),
            updated_at: null,
          };

          const response = await axios.post(
            "http://localhost:3000/users",
            userData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.status === 201) {
            setIsRegistered(true);
            alert("Registration successful! Redirecting to login...");

            // Redirect to the home page after a delay
            setTimeout(() => {
              navigate("/login");
            }, 1500);
          } else {
            setIsRegistered(false);
            alert("Registration failed.");
          }
        } catch (error) {
          setIsRegistered(false);
          console.error("Error during registration:", error);
          alert("An error occurred during registration.");
        }
      } else {
        setIsRegistered(false);
        alert("Passwords do not match.");
      }
    } else {
      setIsRegistered(false);
      alert("Please fill in all the fields.");
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <section
        id="pricing"
        className="pricing-section position-relative mt-5 mb-5"
      >
        <div className="container mt-5 w-50 signup-container p-5 mb-5">
          <form>
            <div className="mb-3 ">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control pe-5 "
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFormChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleFormChange}
              />
            </div>

            {!isRegistered ? (
              <button className="btn  mb-4 w-100" onClick={handleRegistration}>
                Sign up
              </button>
            ) : null}
            <p className="text-center">
              Already have an account?{" "}
              <Link style={{ color: "#f36100" }} to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
