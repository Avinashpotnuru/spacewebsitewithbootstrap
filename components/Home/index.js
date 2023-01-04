import Navbar from "../Navbar";
import Sidenavbar from "../SideNavbar";

function Home() {
  return (
    <div className="homeblock  w-100 ">
      <Navbar />
      <Sidenavbar />
      <div className="container my-5">
        <div className="row d-flex  justify-content-around align-items-center ">
          <div
            className="text-center text-lg-start my-3 col-12 col-md-6"
            // style={{ width: "80%" }}
          >
            <h3 className="text-white pb-3">SO, YOU WANT TO TRAVEL TO</h3>
            <h1
              className="text-white pb-2  "
              style={{ fontSize: "58px", fontFamily: "Bellefair" }}
            >
              SPACE
            </h1>
            <p className="text-white ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div
            className="bg-light col-12  col-md-6 rounded-circle d-flex flex-column justify-content-around align-items-center my-5 "
            style={{ height: "150px", width: "150px" }}
          >
            <h4 className="text-dark text-center align-self-center ">
              EXPLORE
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
