import React from "react";
import { Drawer, List, ListItem, SwipeableDrawer } from "@mui/material";
// import useStyles from "../../components/sidebarMUI/style";
import { ContainerTeste } from "../../components/sidebarMUI/style";



const SidebarMUI = ({openSidebar, setOpenSidebar, }) => {

  // const classes = useStyles();


  return(
    
      <SwipeableDrawer 
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        // sx={{
        //   width: '300px',
        //   background: 'red',
        // }}
      >
        <ContainerTeste>
          <List>
            <ListItem>Menu</ListItem>
          </List>
        </ContainerTeste>
      </SwipeableDrawer>
  )
}


export default SidebarMUI;