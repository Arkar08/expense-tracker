import React from "react";

const Transcation = () => {
  return (
    <div className="mt-6 px-4">
      <h1 className="text-2xl font-semibold">Transcation History</h1>
      <div className="w-[100%] h-[150px] overflow-y-scroll overflow-x-hidden mb-4">
        <div className="flex border-2 w-[90%] h-[30px] m-2 mx-auto px-4 justify-between items-center cursor-pointer rounded-md  relative">
          <h2 className="text-xl">Hello world</h2>
          <h3 className="text-xl">-$500</h3>
          <div className="h-[100%] bg-red-400 w-[6px] absolute top-0 right-0"></div>
        </div>
        <div className="flex  border-2 rounded-md  w-[90%] h-[30px] m-2 mx-auto justify-between items-center px-4 cursor-pointer relative">
          <h2 className="text-xl">Hello world</h2>
          <h3 className="text-xl">$500</h3>
          <div className="h-[100%] bg-green-400 w-[6px] absolute top-0 right-0"></div>
        </div>
        <div className="flex  border-2  w-[90%] h-[30px] m-2 mx-auto justify-between items-center px-4 cursor-pointer rounded-md relative">
          <h2 className="text-xl">Hello world</h2>
          <h3 className="text-xl">-$500</h3>
          <div className="h-[100%] bg-red-400 w-[6px] absolute top-0 right-0"></div>
        </div>
        <div className="flex  border-2  w-[90%] h-[30px] m-2 mx-auto justify-between items-center px-4 cursor-pointer rounded-md relative">
          <h2 className="text-xl">Hello world</h2>
          <h3 className="text-xl">-$500</h3>
          <div className="h-[100%] bg-red-400 w-[6px] absolute top-0 right-0"></div>
        </div>
        <div className="flex  border-2  w-[90%] h-[30px] m-2 mx-auto justify-between items-center px-4 cursor-pointer rounded-md relative">
          <h2 className="text-xl">Hello world</h2>
          <h3 className="text-xl">$500</h3>
          <div className="h-[100%] bg-green-400 w-[6px] absolute top-0 right-0"></div>
        </div>
        <div className="flex  border-2  w-[90%] h-[30px] m-2 mx-auto justify-between items-center px-4 cursor-pointer rounded-md relative">
          <h2 className="text-xl">Hello world</h2>
          <h3 className="text-xl">$500</h3>
          <div className="h-[100%] bg-green-400 w-[6px] absolute top-0 right-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Transcation;
