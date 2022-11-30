import React from "react";
import { useCountStore } from "../store";

const Multiplier = () => {
  const { count } = useCountStore();
  return (
    <>
      <div className="content-center">
        <div className="box">
          <h1>Multiplier: count*5</h1>
          <h1>{count * 5}</h1>
        </div>
      </div>
    </>
  );
};

export default Multiplier;
