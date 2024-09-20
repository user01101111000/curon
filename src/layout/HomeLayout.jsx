import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import "./HomeLayout.css";

const HomeLayout = () => {
  return (
    <main className="home-layout">
      <Header />
      <Outlet />
    </main>
  );
};

export default HomeLayout;
