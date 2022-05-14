import React, { useState } from "react";
import ReactModal from "react-modal";
import { BtnAdd, BtnClose } from "./style";
import { FaTimes, FaPlusCircle } from "react-icons/fa";

const modalStyle = {
  overlay: {
    backgroundColor: "#none",
  },
  content: {
    position: "relative",
    inset: "10% 20%",
    backgroundColor: "rgb(102, 21, 54)",
    opacity: 0.8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    border: "1px solid #FC094B",
    overflow: "auto",
    borderRadius: "2%",
    width: "35vw",
    height: "45vh",
    alignItems: "stretch",
  },
};

const ModalCardFilm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <BtnAdd onClick={openModal}>
        <FaPlusCircle />
      </BtnAdd>

      <ReactModal
        style={modalStyle}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <BtnClose onClick={closeModal}>
          <FaTimes />
        </BtnClose>

        <figure>
          <img src={""} alt="imagem do filme" />
        </figure>
        <h2>Nome do filme</h2>
        <section>
          <button>Coleção</button>
          <button>Desejados</button>
        </section>
      </ReactModal>
    </div>
  );
};

export default ModalCardFilm;
