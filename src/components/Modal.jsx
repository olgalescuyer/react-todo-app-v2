

const Modal = ({ deleteHandler, deleteElement, btnId }) => {
  return (
    <div className="modal" id={btnId}>
      <p>Vous êtes sûr de vouloir supprimer ???</p>

      <button
        className="btn"
        onClick={() => {
          deleteElement(btnId);
          deleteHandler();
        }}
      >
        OUI
      </button>

      <button
        className="btn btn--alt"
        onClick={() => {
          deleteHandler();
        }}
      >
        NON
      </button>
    </div>
  );
};

export default Modal;
//  :
// je transfère la fonction de App "deleteHandler" par props  au click qui change l'état de parent
// ( App est un parent de Modal, donc je change son état depuis son enfant) :)
