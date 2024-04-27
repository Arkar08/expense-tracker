/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import usrContext from "../../hooks/UsrContext";

const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { expense, dispatch } = usrContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newText = {
      transcation: text,
      amount: Number(amount),
    };
    expense.push(newText);
    dispatch({ type: "Add Transcation", payload: expense });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col px-4">
        <label htmlFor="" className="text-xl text-red-600 font-semibold">
          Transcation
        </label>
        <input
          type="text"
          value={text}
          placeholder="Transcation..."
          className="w-[90%] px-4 py-1 mt-1 border outline-none rounded-md"
          onChange={(e) => setText(e.target.value)}
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
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
