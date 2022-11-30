import React from "react";
import { useCountStore } from "../store";

const Decrement = () => {
  const { decrement } = useCountStore();
  return (
    <button className="my-btn" onClick={decrement}>
      decrement
    </button>
  );
};

export default Decrement;
