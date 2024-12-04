import React from "react";
import FormComp from "./FormComp";

const AddCoffee = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h2 className="text-center font-bold text-4xl my-5">Add Coffee</h2>
      <div className="mt-5">
        <FormComp></FormComp>
      </div>
    </div>
  );
};

export default AddCoffee;
