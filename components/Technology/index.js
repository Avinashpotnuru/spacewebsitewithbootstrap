import { buttonData } from "../../data";

import { useState } from "react";
import TechItem from "./TechItem";

import { techData } from "../../data";
import Navbar from "../Navbar";
import Sidenavbar from "../SideNavbar";

function Technology() {
  const [getIndexButton, setIndexButton] = useState(1);

  const indexHandle = (item) => {
    setIndexButton(item.id);
  };
  console.log(getIndexButton);
  return (
    <div className="techblock">
      <Navbar />
      <Sidenavbar />
      <h1 className="text-center ">
        <span style={{ color: "#4d5057", fontWeight: "900" }}>03 </span>SPACE
        LAUNCH 101
      </h1>
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column justify-content-center align-align-items-center flex-md-row col-12">
            <div className="d-flex justify-content-center align-items-center col-md-1">
              <ul className="d-flex w-75 justify-content-around flex-md-column  ">
                {buttonData.map((item) => (
                  <div
                    onClick={() => indexHandle(item)}
                    style={{
                      height: "40px",
                      width: "40px",
                      backgroundColor: "transparent",
                    }}
                    className={` ${
                      item.id !== getIndexButton ? "" : " bg-light text-dark "
                    } text-light border border-light rounded-circle m-2 d-flex justify-content-center align-items-center  `}
                    key={item?.id}
                  >
                    <h4>{item?.name}</h4>
                  </div>
                ))}
              </ul>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-center my-4 col-md-11  ">
              <ul>
                {techData.map((item) => (
                  <li
                    className={`${
                      item.id !== getIndexButton ? "d-none" : "d-block  "
                    } text-decoration  `}
                  >
                    <TechItem key={item?.id} techData={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
