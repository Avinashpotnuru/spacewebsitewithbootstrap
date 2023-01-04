import Navbar from "../components/Navbar";
import Sidenavbar from "../components/SideNavbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="conatiner">
        {/* <Navbar /> */}
        {/* <Sidenavbar /> */}
      </div>

      <Component {...pageProps} />
    </>
  );
}
