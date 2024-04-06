import React from "react";

const Currency_converter = () => {
  return (
    <div className="max-w-xl mx-auto my-10 bg-white rounded-md shadow-md p-5">
      <h1 className="text-2xl font-semibold text-gray-700 mb-10">
        Currency Converter
      </h1>
      <div>DropDown</div>
      <div className="mt-4">
        <label
          htmlFor="amount"
          className="text-gray-700 font-medium text-sm block"
        >
          Amount :
        </label>
        <input
          type="number"
          className="w-full p-2 border border-gary-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    </div>
  );
};

export default Currency_converter;
