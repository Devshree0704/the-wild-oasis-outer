import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="black"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Spinner;
