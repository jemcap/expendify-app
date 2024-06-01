import React, { useState } from "react";

const NewTransaction = () => {
  const [formData, setFormData] = useState({
    text: "",
    amount: "",
  });

  // function handleAddTransaction() = {
  //   setFormData((prevData) => {
  //     return {
  //       ...prevData,
  //       text: text,

  //     }
  //   })
  // }
  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Item</label>
          <input type="text" id="text" placeholder="Enter item..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount... e.g., -250"
          />
        </div>

        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default NewTransaction;
