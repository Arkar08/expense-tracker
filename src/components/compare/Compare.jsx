/* eslint-disable no-unused-vars */
import React from "react";

const Compare = () => {
  return (
    <div className="flex justify-around items-center mt-4 border w-[90%] mx-auto h-[100%] rounded-md">
      <div className="bg-green-600 w-[50%] rounded-l-md text-center">
        <h2 className="text-2xl text-white select-none">Cash</h2>
        <h3 className="text-xl">$500</h3>
      </div>
      <div className="bg-red-600 w-[50%] rounded-r-md text-center">
        <h2 className="text-2xl text-white select-none">OK$</h2>
        <h3 className="text-xl">$500</h3>
      </div>
    </div>
  );
};

export default Compare;
