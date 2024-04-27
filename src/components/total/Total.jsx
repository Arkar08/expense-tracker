/* eslint-disable no-unused-vars */
import React from "react";
import usrContext from "../../hooks/UsrContext";

const Total = () => {
  const { expense } = usrContext();
  const totalAmount = expense.reduce((e, total) => e + total.amount, 0);
  return (
    <div className="px-4 select-none">
      <h2 className="text-2xl font-semibold">Total Amount</h2>
      <h3 className="px-6 text-xl text-blue-700 font-semibold">
        {totalAmount}
      </h3>
    </div>
  );
};

export default Total;
