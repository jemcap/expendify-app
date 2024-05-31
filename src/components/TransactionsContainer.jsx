import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionsContainer = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((transaction) => transaction > 0)
    .reduce((acc, item) => acc + item, 0);

  const expense = transactions
    .map((transaction) => transaction.amount)
    .filter((transaction) => transaction < 0)
    .reduce((acc, item) => acc + item, 0);

  console.log(income);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +£{Math.abs(income).toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -£{Math.abs(expense).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default TransactionsContainer;
