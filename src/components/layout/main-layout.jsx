import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const MainLayOut = () => {
  return (
    <>
      <div className="container-layout">
        <div className="">
          {" "}
          <Header />
        </div>
        <div>
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
