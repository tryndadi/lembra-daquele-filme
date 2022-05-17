import React, { useState } from "react";
import ReactModal from "react-modal";
import { BtnAdd, BtnClose, modalStyle } from "./style";
import { FaTimes, FaPlusCircle } from "react-icons/fa";

import { useInfosModal } from "../../Providers/InfosModalProvider";

const ModalCardFilm = ({ isInfosModalOpen, setIsInfosModalOpen }) => {
  const { isOpen, toogle } = useInfosModal();

  return (
    <div>
      <ReactModal
        style={{ ...modalStyle }}
        isOpen={isOpen}
        onRequestClose={toogle}
        ariaHideApp={false}
      >
        <BtnClose onClick={toogle}>
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
