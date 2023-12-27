import "./App.css";
import { Route, Routes } from "react-router-dom";


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
import MainLayout from "./components/MainLayout";

// dashboard
import DashboardLayout from "./dashboard/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import ClassesDashboard from "./dashboard/classes/ClassesDashboard";
import AddClass from "./dashboard/classes/AddClasses";
import EditClass from "./dashboard/classes/EditClasses";
import Users from "./dashboard/users/Users";
import AddUser from "./dashboard/users/AddUser";
import DashboardProvider from "./context/DashboardContext";
import Trainers from "./dashboard/trainers/Trainers";
import AddTrainers from "./dashboard/trainers/AddTrainers";
import EditTrainer from "./dashboard/trainers/EditTrainer";

const App = () => {
  return (
    <>
      <AuthProvider>
        <DashboardProvider>

          <Routes>
            <Route path="/" element={<MainLayout />}>
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
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/classes" element={<ClassesDashboard />} />
              <Route path="/dashboard/classes/add" element={<AddClass />} />
              <Route path="/dashboard/classes/edit/:id" element={<EditClass />} />
              <Route path="/dashboard/users" element={<Users />} />
              <Route path="/dashboard/users/add" element={<AddUser />} />
              <Route path="/dashboard/trainers" element={<Trainers />} />
              <Route path="/dashboard/trainers/add" element={<AddTrainers />} />
              <Route path="/dashboard/trainers/edit/:id" element={<EditTrainer />} />
            </Route>
          </Routes>
        </DashboardProvider>
      </AuthProvider>
    </>
  );
};
export default App;
