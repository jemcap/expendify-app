import React, { useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionItem = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <>
      <li
        key={transaction.id}
        className={transaction.amount < 0 ? "minus" : "plus"}
      >
        {transaction.text}
        <span>
          {sign}£{Math.abs(transaction.amount)}
        </span>
      </li>
    </>
  );
};

export default TransactionItem;
