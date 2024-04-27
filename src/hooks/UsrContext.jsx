/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AmountContext } from "../context/AmountContext";

const usrContext = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(AmountContext);
  if (!context) {
    throw Error("Invaild Amount Context");
  }
  return context;
};

export default usrContext;
