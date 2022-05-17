import React, { useEffect } from "react";
import ReactModal from "react-modal";

import { FaTimes } from "react-icons/fa";
import { BtnClose, modalStyle } from "./style";
import { useInfosModal } from "../../Providers/InfosModalProvider";

const ModalCardFilm = () => {
  const { isOpen, toogle, media } = useInfosModal();

  useEffect(() => {
    console.log(media);
  }, [media]);

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
