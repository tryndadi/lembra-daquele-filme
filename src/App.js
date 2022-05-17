import React from "react";
import Routes from "./Routes";

import { ToastContainer } from "react-toastify";
import { useInfosModal } from "./Providers/InfosModalProvider";

import ModalCardFilm from "./components/ModalCardFilm";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes />
      <ModalCardFilm />
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
