import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./main-layout.scss";
import ScrollToTop from "../../event/ScrollToTop";
const MainLayOut = () => {
  return (
    <>
    <ScrollToTop />
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
