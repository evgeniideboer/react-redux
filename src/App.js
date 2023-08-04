import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Test from "./test";
import { addCustomAction, removeCustomAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomAction(customer.id));
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

        <div>
          <button onClick={() => addCustomer(prompt())}>
            Добавлять клиента
          </button>
        </div>
        <div>
          {customers.length > 0 ? (
            <div>
              {customers.map((customer) => (
                <div
                  onClick={() => removeCustomer(customer)}
                  style={{
                    fontSize: "2rem",
                    border: "1px solid black",
                    padding: "10px",
                    marginTop: 5,
                  }}
                >
                  {customer.name}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ fontSize: "3rem", marginTop: 20 }}>
              Клиенты отсутствуют!
            </div>
          )}
        </div>

        {/* <div style={{ fontSize: "3rem" }}>
          <Test />
        </div> */}
      </div>
    </div>
  );
}

export default App;
