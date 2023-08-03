import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Test from "./test";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  return (
    <div className="app">
      <div>
        <div style={{ fontSize: "3rem" }}>{cash}</div>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счёта
        </button>
        <div style={{ fontSize: "3rem" }}>
          <Test />
        </div>
      </div>
    </div>
  );
}

export default App;
