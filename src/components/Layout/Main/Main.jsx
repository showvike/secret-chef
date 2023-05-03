import { Outlet } from "react-router-dom";
import Footer from "../../Share/Footer/Footer";
import Header from "../../Share/Header/Header";

const Main = () => {
  return (
    <div className="container mx-auto font-poppins">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
