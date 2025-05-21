import React from "react";
import loader from "../assets/loader.svg";

const Loader = () => {
  return (
    <div>
      <img
        src={loader}
        alt="loading"
        style={{ height: "80vh", width: "40vw", margin: "auto" }}
      />
    </div>
  );
};

export default Loader;
