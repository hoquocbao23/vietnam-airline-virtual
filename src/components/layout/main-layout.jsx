import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./main-layout.scss";
const MainLayOut = () => {
  return (
    <>
      <div className="container-layout">
        <div className="">
          {" "}
          <Header />
        </div>
        <div className="content">
          <Outlet />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default MainLayOut;
