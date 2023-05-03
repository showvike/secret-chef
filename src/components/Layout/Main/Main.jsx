import { Outlet } from "react-router-dom";
import Header from "../../Share/Header/Header";

const Main = () => {
  return (
    <div className="container mx-auto font-poppins">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
