import React, { useState } from "react";
import Todo from "./Todo";

const Modal = (props) => {
  

  return (
    <div className="modal">
      <p>Vous êtes sûr de vouloir supprimer ???</p>

      <button className="btn">OUI</button>

      <button
        className="btn btn--alt"
        onClick={() => {
          props.func(false);
        }}
      >
        NON
      </button>
    </div>
  );
};

export default Modal;
// NON :
// je transfère la fonction de App "deleteHandler" par props + j'assigne la valeur false (que ja passe un argumant "bool") au click qui change l'état de parent
// ( App est un parent de Modal, donc je change son état depuis son enfant) :)
