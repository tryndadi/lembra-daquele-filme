import React, { useEffect, useState } from "react";

import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import { tmdbAccess } from "../../services/api";
import { getByGenre } from "../../services/tmdb";
import { useTMDBMedias } from "../../Providers/MediasProvider";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const userData = localStorage.getItem("userData");

  const { name, email } = JSON.parse(userData);
=======
import { ListItem, SwipeableDrawer } from "@mui/material";
import { ContainerSidebar, section, category } from "./style";


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useTMDBMedias } from "../../Providers/MediasProvider";
import { getByGenre } from "../../services/tmdb";
import { tmdbAccess } from "../../services/api";



const SidebarMUI = ({openSidebar, setOpenSidebar, }) => {


  const [open, setOpen] = useState(false);
  const [movieGenres, setMovieGenres] = useState([]);

  const { isLoading, getMedias } = useTMDBMedias();

  const userData = localStorage.getItem('userData');
  const {name, email} = JSON.parse(userData);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleFilterClick = async (genre) => {
    const filteredMovies = await getByGenre(genre);
    getMedias(filteredMovies);
  };

  useEffect(() => {
    tmdbAccess
      .get("/genre/movie/list?&language=pt-BR")
      .then((resp) => setMovieGenres(resp.data))
      .catch((err) => console.log(`erro getGenres => ${err}`));
  }, []);


  const handleFilterClick = async (genre) => {
    const filteredMovies = await getByGenre(genre);
    getMedias(filteredMovies);
  };

  return (
    <ProSidebar width="18vw">
      <SidebarHeader>
        <img src="" alt="Imagem do usuário" />
        <h2>{name}</h2>
        <span>{email}</span>
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          <SubMenu title="Media">
            <MenuItem>Filmes</MenuItem>
            <MenuItem>Séries</MenuItem>
          </SubMenu>

          <SubMenu title="Categorias">
            {movieGenres.genres &&
              movieGenres.genres.map((genre) => (
                <MenuItem
                  key={genre.id}
                  onClick={() => handleFilterClick(genre)}
                >
                  {genre.name}
                </MenuItem>
              ))}
          </SubMenu>

          <SubMenu title="Conta">
            <MenuItem>Biblioteca</MenuItem>
            <MenuItem>Perfil</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <Menu>
          <MenuItem>
            Sair
            <Link to="/" />
          </MenuItem>
        </Menu>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;


  return(
    
      <SwipeableDrawer 
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
      >
        <ContainerSidebar>
          <List>
            {/* <ListItem sx={{...section}}>Menu</ListItem>
            <ListItem>Menu</ListItem>
            <ListItemAvatar/>
            <MenuList>
              <Menu >
                <MenuItem>Conta</MenuItem>
              </Menu>
            </MenuList> */}
            <ListItem>
              <div className="cont-infos-usuario">
                <img src="" alt="Foto de perfil" />

                <div className="cont-nome-email">
                  <span>{name}</span>
                  <span>{email}</span>
                </div>
              </div>
            </ListItem>

            <div className="divider"/>

            <ListItem sx={{...section}}>
              Media
            </ListItem>

            <ListItemButton>
              <ListItemText primary="Filmes" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Séries" />
            </ListItemButton>

            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Categorias" />
              {open ? <FiChevronUp/> : <FiChevronDown/>}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {movieGenres.genres &&
                  movieGenres.genres.map((genre) => (
                    <ListItemButton 
                    key={genre.id} 
                    onClick={() => handleFilterClick(genre)}
                    sx={{...category}}
                    >
                      <ListItemText primary={genre.name}/>
                    </ListItemButton>
                ))}
              </List>
            </Collapse>

            <div className="divider"/>

            <ListItem sx={{...section}}>
              Conta
            </ListItem>

            <ListItemButton>
              <ListItemText primary="Biblioteca" />
            </ListItemButton>

            <ListItemButton>
              <ListItemText primary="Perfil" />
            </ListItemButton>

            <div className="divider"/>

            <ListItemButton>
              <ListItemText primary="Sair" />
            </ListItemButton>
          </List>

 
        </ContainerSidebar>
      </SwipeableDrawer>
  )
}


export default SidebarMUI;

