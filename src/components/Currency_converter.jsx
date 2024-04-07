import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import { HiArrowsRightLeft } from "react-icons/hi2";

const Currency_converter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const fetchCurrency = async () => {
    try {
      const res = await fetch("https://api.frankfurter.app/currencies");
      const data = await res.json();
      setCurrencies(Object.keys(data));
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };

  useEffect(() => {
    fetchCurrency();
  }, []);
  console.log(currencies);
  const convertCurrency = () => {};
  const handlefavorite = (currency) => {
    console.log("handle favorite");
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency)
  };

  // https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  return (
    <div className="max-w-xl mx-auto my-10 bg-white rounded-md shadow-md p-5">
      <h1 className="text-2xl font-semibold text-gray-700 mb-10">
        Currency Converter
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <DropDown
          currencies={currencies}
          title="From:"
          currency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <div className="flex justify-center -mb-5 sm:mb-0">
          <button
            onClick={swapCurrencies}
            className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
          >
            <HiArrowsRightLeft className="text-xl text-gray-700" />
          </button>
        </div>
        <DropDown
          currencies={currencies}
          currency={toCurrency}
          setCurrency={setToCurrency}
          title="To:"
        />
      </div>
      <div className="mt-4">
        <label
          value={amount}
          htmlFor="amount"
          className="text-gray-700 font-medium text-sm block"
          onChange={(e) => SetAmount(e.target.value)}
        >
          Amount :
        </label>
        <input
          type="number"
          className="w-full p-2 border border-gary-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={convertCurrency}
          className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 
        focus:outline-none focus:ring-2 focus-ring-indigo-500 focus:ring-offset-2"
        >
          Convert
        </button>
      </div>
      <div className="mt-4 text-lg text-right text-green-600 font-medium">
        $69{" "}
      </div>
    </div>
  );
};

export default Currency_converter;
