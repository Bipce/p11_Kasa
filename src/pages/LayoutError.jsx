import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Error from "./Error";

const Layout = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <Navbar />
        <Error />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;