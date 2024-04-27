/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./components/header/Header";
import Total from "./components/total/Total";
import Compare from "./components/compare/Compare";
import Transcation from "./components/transcation/Transcation";
import Form from "./components/form/Form";

const App = () => {
  return (
    <div className="w-[400px] h-[100%] border rounded-md mx-auto mt-[30px] shadow-lg">
      <Header />
      <Total />
      <Compare />
      <Transcation />
      <Form />
    </div>
  );
};

export default App;
