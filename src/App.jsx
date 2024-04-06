import { useState } from "react";
import "./App.css";
import Currency_converter from "./components/Currency_converter";

function App() {
  // https://api.frankfurter.app/currencies
  // https://api.frankfurter.app/latest?amount=1&from=USD&to=INR
  https: return (
    <div>
      <h1 className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <Currency_converter />
      </h1>
    </div>
  );
}

export default App;
