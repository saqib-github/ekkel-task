import React from "react";
import { useCountStore } from "../store";

const Divider = () => {
  const { count } = useCountStore();
  return (
    <>
      <div className="content-center">
        <div className="box">
          <h1>Divider: count/5</h1>
          <h1>{count / 5}</h1>
        </div>
      </div>
    </>
  );
};

export default Divider;
