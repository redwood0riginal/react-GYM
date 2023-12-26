import "./App.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Classes from "./components/gymClasses/classes";
import Contact from "./components/contact/contact";
import Login from "./components/login/login";
import SignUp from "./components/signUp/signUp";

import Schedule from "./components/Schedule/Schedule";
import Monday from "./components/Schedule/Monday";
import Tuesday from "./components/Schedule/Tuesday";
import Wednesday from "./components/Schedule/Wednesday";
import Thursday from "./components/Schedule/Thursday";
import Friday from "./components/Schedule/Friday";
import Saturday from "./components/Schedule/Saturday";
import { AuthProvider } from "./context/AuthContext";
import Profile from "./components/profile/profile";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="classes" element={<Classes />} />
          <Route path="schedule" element={<Schedule />}>
            <Route path="monday" element={<Monday />} />
            <Route path="tuesday" element={<Tuesday />} />
            <Route path="wednesday" element={<Wednesday />} />
            <Route path="thursday" element={<Thursday />} />
            <Route path="friday" element={<Friday />} />
            <Route path="saturday" element={<Saturday />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />

        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
};
export default App;
