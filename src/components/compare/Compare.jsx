/* eslint-disable no-unused-vars */
import React from "react";
import usrContext from "../../hooks/UsrContext";

const Compare = () => {
  const { expense } = usrContext();
  const amount = expense.map((e) => e.amount);
  const income = amount
    .filter((i) => i > 0)
    .reduce((e, item) => (e += item), 0)
    .toFixed(2);

  const expen = (
    amount.filter((i) => i < 0).reduce((i, item) => (i += item), 0) * -1
  ).toFixed(2);
  return (
    <div className="flex justify-around items-center mt-4 border w-[90%] mx-auto h-[100%] rounded-md">
      <div className="bg-green-600 w-[50%] rounded-l-md text-center">
        <h2 className="text-2xl text-white select-none">Income</h2>
        <h3 className="text-xl">{income}</h3>
      </div>
      <div className="bg-red-600 w-[50%] rounded-r-md text-center">
        <h2 className="text-2xl text-white select-none">Expense</h2>
        <h3 className="text-xl">{expen}</h3>
      </div>
    </div>
  );
};

export default Compare;
