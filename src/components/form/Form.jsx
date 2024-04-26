import React from "react";

const Form = () => {
  return (
    <form>
      <div className="flex flex-col px-4">
        <label htmlFor="" className="text-xl text-red-600 font-semibold">
          Transcation
        </label>
        <input
          type="text"
          placeholder="Transcation..."
          className="w-[90%] px-4 py-1 mt-1 border outline-none rounded-md"
        />
      </div>
      <div className="flex flex-col px-4 mt-2">
        <label htmlFor="" className="text-xl text-red-600 font-semibold">
          Amount
        </label>
        <input
          type="number"
          placeholder="Amount..."
          className="w-[90%] px-4 py-1 mt-1 border outline-none rounded-md"
        />
      </div>
      <div className="flex items-center justify-center m-4">
        <input
          type="submit"
          className="text-xl w-[50%] py-1 bg-blue-600 border-none outline-none cursor-pointer rounded-md text-white"
        />
      </div>
    </form>
  );
};

export default Form;
