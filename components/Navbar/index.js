import { navData } from "../../data";
import React from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
function Navbar() {
  return (
    <div className="col-12  p-3  d-none d-sm-block " style={{ width: "100%" }}>
      <div className="container">
        <div className="row">
          <nav
            className="d-flex w-100 flex-row justify-content-between align-items-center"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="bg-light rounded-circle">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 2">
                  <circle id="Oval" cx="24" cy="24" r="24" fill="white" />
                  <path
                    id="Path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M24 0C24 0 24 24 0 24C23.5776 24.1714 24 48 24 48C24 48 24 24 48 24C24 24 24 0 24 0Z"
                    fill="#0B0D17"
                  />
                </g>
              </svg>
            </div>
            <ul
              className=" w-50 p-4 d-flex flex-row justify-content-around w-75 "
              style={{ backgroundColor: "#262a32", color: "white" }}
            >
              {navData.map((item) => (
                <Link
                  key={item?.id}
                  className="text-center pt-2"
                  href={item?.link}
                >
                  <span style={{ fontWeight: "900" }}>{`0${item.id} `}</span>
                  <p
                    style={{
                      textDecoration: "none",
                      display: "inline",
                      borderBottomColor: "white",
                    }}
                  >
                    <button>{item?.tabs}</button>
                  </p>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
