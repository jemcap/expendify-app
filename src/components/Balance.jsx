import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc, item), 0);

  return (
    <div className="balance-container">
      <small>Balance:</small>
      <h1 id="balance">{total < 0 ? `-£${Math.abs(total)}` : `£${total}`}</h1>
    </div>
  );
};

export default Balance;
