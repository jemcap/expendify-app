import React, { useRef } from "react";
import AboutModal from "./AboutModal";

const Header = () => {
  const modalRef = useRef();

  function openModal() {
    if (modalRef.current) {
      modalRef.current.style.display = "block";
    }
  }
  function closeModal() {
    if (modalRef.current) {
      modalRef.current.style.display = "none";
    }
  }

  return (
    <header>
      <h2>Expendify</h2>
      <button onClick={openModal} className="about-btn">
        What is this app about?
      </button>
      <AboutModal ref={modalRef} onClose={closeModal} />
    </header>
  );
};

export default Header;
