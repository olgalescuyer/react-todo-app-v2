import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = ({ titre, description }) => {
  const [modalOuverte, setModalOuverte] = useState(false);

  const deleteHandler = () => {
    // console.log('suppression :' + titre);
    
    // chager d'état :
    setModalOuverte(true);
  };

  return (
    <div className="card">
      <h2>{titre}</h2>
      <p>{description}</p>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Supprimer
        </button>
      </div>

      {modalOuverte && <Modal />}
      {modalOuverte && <Backdrop />}
    </div>
  );
};

export default Todo;


