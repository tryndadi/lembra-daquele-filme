import React from "react";
import Routes from "./Routes";

import { ToastContainer } from "react-toastify";
import { useInfosModal } from "./Providers/InfosModalProvider";
import { useCommentModal } from "./Providers/CommentModalProvider";
import ModalCardFilm from "./components/modalCardFilm";
import "react-toastify/dist/ReactToastify.css";
import ModalCommentFilm from "./components/modalCommentFilm";

function App() {
  return (
    <>
      <Routes />
      <ModalCardFilm />
      <ModalCommentFilm />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
