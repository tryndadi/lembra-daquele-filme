import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  modal: {
    "@media screen and (max-width: 486px)": {
      maxWidth: "320px",
      maxWeight: "180px",
    },
  },
}));

export const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    background: "transparent",
    position: "relative",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    width: "100%",
    maxWidth: "640px",
    textAlign: "right",
  },
};
