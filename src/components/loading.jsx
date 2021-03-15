import React from "react";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div
      style={{ height: "90vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Loader type="Puff" color="#000000" height={250} width={250} radius={6} />
    </div>
  );
}

export default Loading;
