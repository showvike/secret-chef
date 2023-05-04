import { useRouteError } from "react-router-dom";
import error404 from "../../assets/error-404.jpg";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="container mx-auto font-poppins">
      <Header />
      <div>
        <img
          className="w-screen h-screen object-cover"
          src={error404}
          alt="404"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Error;
