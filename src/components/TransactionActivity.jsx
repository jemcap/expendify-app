import { GlobalContext } from "../context/GlobalState";
import React, { useContext } from "react";
import TransactionItem from "./TransactionItem";

const TransactionActivity = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Activity</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionActivity;
