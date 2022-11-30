import React, { useEffect, useState } from "react";
import { useCountStore } from "../store";

const Increment = () => {
  const { increment } = useCountStore();
  return <button className="my-btn" onClick={increment}>increment</button>;
};

export default Increment;
