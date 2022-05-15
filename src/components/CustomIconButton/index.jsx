import React from "react";

import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";

const CustomIconButton = ({ children, title, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton onClick={onClick}>{children}</IconButton>
    </Tooltip>
  );
};

export default CustomIconButton;
