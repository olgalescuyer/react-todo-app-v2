

const Modal = ({ func, delFunc, btnId }) => {
  return (
    <div className="modal" id={btnId}>
      <p>Vous êtes sûr de vouloir supprimer ???</p>

      <button
        className="btn"
        onClick={() => {
          delFunc(btnId);
          func(false);
        }}
      >
        OUI
      </button>

      <button
        className="btn btn--alt"
        onClick={() => {
          func(false);
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
