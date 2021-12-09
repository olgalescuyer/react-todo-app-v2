import React from "react";

const Modal = () => {
  return (
    <div className="modal">
      <p>Vous êtes sûr de vouloir supprimer ???</p>
      <button className="btn">OUI</button>
      <button className="btn btn--alt">NON</button>
    </div>
  );
};

export default Modal;
