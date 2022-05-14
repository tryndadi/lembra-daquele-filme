import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: {
      main: "rgba(132, 19, 56, 1)",
      light: "rgba(171, 16, 58, 1)",
      dark: "rgba(48, 25, 51, 1)",
      gradient: "linear-gradient(360deg, rgba(48,25,51,1) 0%, rgba(132,19,56,1) 45%, rgba(171,16,58,1) 89%)",
    },
    modal: {
      main: "rgba(102, 21, 54, 0.92)",
    },
    card: {
      main: "rgb(147, 17, 53)",
      light: "rgba(252, 9, 75, 1)",
      dark: "rgba(123, 19, 52, 1)",
    },
    grey: {
      main: "rgba(196, 196, 196, 1)",
      light: "rgba(226, 223, 223, 1)",
      dark: "rgba(184, 183, 180, 1)",
    },
    text: {
      main: "rgba(255, 255, 255, 1)",
      secondary: "rgba(184, 183, 180, 1)",
      error: "rgba(255, 155, 84, 1)"
    },
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
