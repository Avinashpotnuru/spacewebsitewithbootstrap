import { destinationData } from "../../data";
import { useState } from "react";
import DestinationCard from "./DestinationCard";
import Navbar from "../Navbar";
import Sidenavbar from "../SideNavbar";

function Destination() {
  const [setIndex, getIndex] = useState(1);
  const getIndexId = (item) => {
    getIndex(item.id);
  };
  console.log(setIndex);

  return (
    <div className="destinationblock w-100">
      <Navbar />
      <Sidenavbar />
      <div className="container ">
        <div className="row">
          <h1 className="text-center my-4">
            <span style={{ color: "#4d5057", fontWeight: "900" }} className="">
              01{" "}
            </span>
            Pick your destination
          </h1>
          <div className="col-12 w-90">
            <ul className="d-flex justify-content-around align-items-center   ">
              {destinationData.map((item) => (
                <li
                  onClick={() => getIndexId(item)}
                  key={item?.id}
                  className={`${
                    item?.id === setIndex
                      ? " font-weight-bold text-decoration"
                      : ""
                  }`}
                >
                  <p
                    style={{
                      textDecoration: item.id === setIndex ? "underline" : "",
                    }}
                    className={`${
                      item?.id === setIndex
                        ? "text-decorations"
                        : "text-decoration-none"
                    }`}
                  >
                    {item?.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="d-flex justify-content-center align-content-center">
              {destinationData.map((item) => (
                <div
                  key={item?.id}
                  className={`${
                    item.id !== setIndex ? "d-none" : "d-block  "
                  }  `}
                >
                  <DestinationCard key={item.id} destinationData={item} />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
