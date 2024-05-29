import React, { forwardRef } from "react";

const AboutModal = forwardRef((props, ref) => {
  return (
    <dialog ref={ref} className="modal" style={{ display: "none" }}>
      <div className="modal-content">
        <h1>What is Expendify</h1>
        <p>
          With Expendify, you can effortlessly monitor all your financial
          transactions. This user-friendly tool allows you to keep a close eye
          on both your income and expenses, providing a clear and comprehensive
          overview of your financial health. Whether you are managing personal
          finances or handling business accounts, Expendify ensures that every
          dollar is accounted for, helping you make informed decisions and stay
          on top of your budget.
        </p>
        <button className="close" onClick={props.onClose}>
          Got it
        </button>
      </div>
    </dialog>
  );
});

export default AboutModal;
