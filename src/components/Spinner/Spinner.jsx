/* eslint-disable react/prop-types */

import { ColorRing } from "react-loader-spinner";

const Spinner = ({ navigation }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div
      className={navigation.state === "loading" ? "block" : "hidden"}
      style={style}
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </div>
  );
};

export default Spinner;
