import { Outlet } from "react-router-dom"
import Footer from "./footer/footer"
import Navbar from "./navbar/navbar"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />

    </>
  )
}

export default MainLayout