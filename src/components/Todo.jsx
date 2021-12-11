import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

const Todo = () => {
  const [dataArr, setDataArr] = useState([
    { titre: "React tuto", description: "lorem" },
    { titre: "React super tuto", description: "lorem ipsum" },
    { titre: "React puper tuto", description: "lorem ipsum dolor" },
  ]);

  const [modalOuverte, setModalOuverte] = useState(false);
  // console.log(modalOuverte);

  const deleteHandler = (bool) => {
    setModalOuverte(bool);
  };

  return (
    <div>
      {dataArr.map((item, index) => {
        return (
          <div className="card">
            <div className="action" key={index}>
              <h2>{item.titre}</h2>
              <p>{item.description}</p>
              <button className="btn" onClick={deleteHandler}>
                Supprimer
              </button>
            </div>
            {modalOuverte && <Modal func={deleteHandler} />}
            {modalOuverte && <Backdrop />}
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
