import { navData } from "../../data";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

const MobNavBar = () => {
  return (
    <nav
      className="p-4"
      style={{
        backgroundColor: "#495363",
        width: "80%",
        color: "white",
        width: "100%",
        marginLeft: "30%",
      }}
    >
      {navData.map((item) => (
        <div className="text-end">
          <Link className="text-white  " key={item?.id} href={item?.link}>
            <span style={{ fontWeight: "900" }}>{`0${item.id} `}</span>
            <p
              style={{
                display: "inline",
                textDecoration: "none",
                marginBottom: "4px",
              }}
            >
              {item?.tabs}
            </p>
          </Link>
        </div>
      ))}
    </nav>
  );
};

const Sidenavbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" col-12 w-90 d-block d-sm-none p-3">
      <div className="container">
        <div className="row ">
          <div className="d-flex justify-content-between align-items-center">
            <div className="p-3">
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

            <div
              className=" d-flex  flex-column justify-content-between "
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? (
                <AiOutlineClose color="white" size="35px" />
              ) : (
                <AiOutlineMenu color="white" size="35px" />
              )}
            </div>
          </div>
        </div>
        <div className="mx-auto  d-block d-sm-none  d-flex justify-content-center align-content-center">
          {open ? <MobNavBar /> : ""}
        </div>
      </div>
    </div>
  );
};
export default Sidenavbar;
