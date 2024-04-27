/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Detail = ({ expense }) => {
  console.log(expense);
  return (
    <div className="flex  border-2 rounded-md  w-[90%] h-[30px] m-2 mx-auto justify-between items-center px-4 cursor-pointer relative">
      <h2 className="text-xl">{expense.transcation}</h2>
      <h3 className="text-xl">{expense.amount}</h3>
      <div className="h-[100%] bg-green-400 w-[6px] absolute top-0 right-0"></div>
    </div>
  );
};

export default Detail;
