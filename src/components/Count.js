import React from "react";
import { useCountStore } from "../store";

const Count = () => {
  const { count } = useCountStore();
  return (
    <>
      <div className="content-center">
        <div className="box">
          <h1>count: {count}</h1>
        </div>
      </div>
    </>
  );
};

export default Count;
