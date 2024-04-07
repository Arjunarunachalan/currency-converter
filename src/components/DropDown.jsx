import React from "react";
import { HiOutlineStar } from "react-icons/hi";

const DropDown = ({
  currencies,
  currency,
  setCurrency,
  favorites,
  handlefavorite,
  title = "",
}) => {
  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gary-700"
      >
        {title}
      </label>
      <div className="mt-1 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none
        focus:ring-2 focus:ring-indigo-500"
        >
          {favorites.map((currency) => {
            return (
              <option className="bg-gray-200" value={currency} key={currency}>
                {currency}
              </option>
            );
          })}
          <hr />
          {currencies
            .filter((c) => !favorites.includes(c))
            .map((currency) => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
        </select>
        <button
          onClick={() => handlefavorite(currency)}
          className="absolute inset-y-0 right-0 pr-5 flex items-center text-sm"
        >
          <HiOutlineStar />
        </button>
      </div>
    </div>
  );
};

export default DropDown;
