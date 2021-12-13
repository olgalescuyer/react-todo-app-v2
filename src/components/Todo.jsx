import { useState, Fragment } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [dataArr, setDataArr] = useState([
    { titre: "React tuto", description: "lorem", id: uuidv4() },
    { titre: "React super tuto", description: "lorem ipsum", id: uuidv4() },
    { titre: "React puper tuto", description: "lorem ipsum dolor", id: uuidv4() },
  ]);

  const deleteElement = (id) => {
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDataArr(filteredState);
  };

  const [modalOuverte, setModalOuverte] = useState(false);
  // console.log(modalOuverte);

  const deleteHandler = (bool) => {
    setModalOuverte(bool);
  };

  return (
    <Fragment>
      {dataArr.map((item) => {
        return (
          <div className="card" key={item.id} id={item.id} style={{"margin-bottom": "20px"}}>
            <div className="action">
              <h2>{item.titre}</h2>
              <p>{item.description}</p>
              <button className="btn" onClick={deleteHandler}>
                Supprimer
              </button>
            </div>
            {modalOuverte && (
              <Modal
                func={deleteHandler}
                delFunc={deleteElement}
                btnId={item.id}
              />
            )}
            {modalOuverte && <Backdrop />}
          </div>
        );
      })}
    </Fragment>
  );
};

export default Todo;
