import React from "react";
import TraillerPlayer from "../TraillerPlayer";

import ReactModal from "react-modal";
import { AiFillCloseSquare } from "react-icons/ai";

import { modalStyles } from "./styles";

import useStyles from "./styles";

const TrailerModal = ({ isOpen, setIsOpen, traillerId }) => {
  const classes = useStyles();

  return (
    <ReactModal
      className={classes.modal}
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={{ ...modalStyles }}
    >
      <AiFillCloseSquare
        size={20}
        color="rgba(205,92,92, 0.9)"
        cursor="pointer"
        onClick={() => setIsOpen(false)}
      />

      <TraillerPlayer id={traillerId} />
    </ReactModal>
  );
};

export default TrailerModal;
