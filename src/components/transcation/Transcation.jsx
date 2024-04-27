/* eslint-disable no-unused-vars */
import React from "react";
import usrContext from "../../hooks/UsrContext";
import Detail from "../Detail/Detail";

const Transcation = () => {
  const { expense } = usrContext();
  return (
    <div className="mt-6 px-4">
      <h1 className="text-2xl font-semibold">Transcation History</h1>
      <div className="w-[100%] h-[150px] overflow-y-scroll overflow-x-hidden mb-4">
        {expense &&
          expense.map((e, index) => {
            return <Detail key={index} expense={e} />;
          })}
      </div>
    </div>
  );
};

export default Transcation;
