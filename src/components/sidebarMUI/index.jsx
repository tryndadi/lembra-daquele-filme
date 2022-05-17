import React from "react";
import { Drawer, List, ListItem } from "@mui/material";
import { ContainerTeste } from "../../components/sidebarMUI/style";

const SidebarMUI = ({ openSidebar, setOpenSidebar }) => {
  return (
    <Drawer open={!!openSidebar} onClose={() => setOpenSidebar(false)}>
      <ContainerTeste>
        <List>
          <ListItem>Menu</ListItem>
        </List>
      </ContainerTeste>
    </Drawer>
  );
};

export default SidebarMUI;
