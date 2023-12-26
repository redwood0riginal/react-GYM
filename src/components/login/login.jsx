import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate} from "react-router-dom";
import "./login.css";

const Login = () => {
const navigate = useNavigate()
  const { isAuthenticated, login, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const history = useHistory();


  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    if (email && password) {
      try {
        const success = await login(email, password);

        if (success) {
          // Display success message using SweetAlert or other notification library
          alert("Login successful");
          setTimeout(() => {
            // Use window.location.href for redirecting
            navigate("/")
          }, 1000);
          // Redirect to the home page);
        } else {
          // Display error message using SweetAlert or other notification library
          alert("Invalid email or password");
        }
      } catch (error) {
        console.error("Error occurred during login:", error);

        // Display error message using SweetAlert or other notification library
        alert("An error occurred during login");
      }
    } else {
      // Display error message for incomplete fields
      alert("Please fill in all fields");
    }
  };

  const handleFormChange = (name, value) => {
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
        <div className=" container mt-5 w-50 form-container p-5 mb-5">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control pe-5"
                value={formData.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                value={formData.password}
                onChange={(e) => handleFormChange("password", e.target.value)}
                id="exampleInputPassword1"
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!isAuthenticated && (
              <button className="btn mb-5 mt-4 w-100" type="submit">
                Sign in
              </button>
            )}
            <p className="text-center">
              Not a member?{" "}
              <Link style={{ color: "#f36100" }} to="/signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
