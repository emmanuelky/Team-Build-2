import React from "react";
import MyNavbar from "../MyNavbar";
import MyFooter from "../MyFooter";
import RightSidebar from "../RightSidebar";
import Feeds from "../Feeds";

import "./HomePage.css";
import SideBarHome from "./SideBarHome";

const HomePage = () => {
  return (
    <div>
      <div className="d-flex flex-column align-items-center flex-wrap">
        <div
          className="d-flex flex-wraptext-center mb-4"
          style={{ width: "100vw" }}
        >
          <MyNavbar />
          <h2>navbar</h2>
        </div>

        <div className="d-flex flex-wrap my-5">
          <div className="flex-column flex-wrap home-sidebar-2 m-1">
            <div id="makeItStick" className=" mb-3">
              <SideBarHome />
            </div>
          </div>
          <div className="flex-column flex-wrap feeds">
            <div className="">
              <Feeds />
            </div>
          </div>
          <div className="home-sidebar-1 ml-3">
            <RightSidebar />
          </div>
        </div>

        <div className="w-100">
          <div>
            <MyFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
