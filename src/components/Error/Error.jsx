import { useRouteError } from "react-router-dom";
import error404 from "../../assets/error-404.jpg";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <img
        className="w-screen h-screen object-cover"
        src={error404}
        alt="404"
      />
    </div>
  );
};

export default Error;
