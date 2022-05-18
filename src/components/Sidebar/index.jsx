import React, { useEffect, useState } from "react";

import { tmdbAccess } from "../../services/api";
import tmdb, { getByGenre } from "../../services/tmdb";
import { getFromStorage } from "../../assets/js/utils";
import { useTMDBMedias } from "../../Providers/MediasProvider";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import { ListItem, Drawer, Divider } from "@mui/material";
import { ContainerSidebar, section, category, divider, generalStyle } from "./style";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import perfil from '../../assets/img/perfil.webp'; // ========= ========= IMAGEM PROVISORIA !!! ========= =========




const SidebarMUI = ({ openSidebar, setOpenSidebar, handleLogout }) => {

  const [open, setOpen] = useState(false);
  const [movieGenres, setMovieGenres] = useState([]);

  const { name, email } = getFromStorage("userData");
  const { getMedias } = useTMDBMedias();

  useEffect(() => {
    tmdbAccess
      .get("/genre/movie/list?&language=pt-BR")
      .then(({ data }) => setMovieGenres(data));
  }, []);

  const applyFilter = async (genre) => {
    getMedias(await getByGenre(genre));
    setOpenSidebar(false);
  };


  return (
    <Drawer open={openSidebar} onClose={() => setOpenSidebar(false)} >
      <ContainerSidebar>
        <List sx={{...generalStyle}}>
          <ListItem>
            <div className="cont-infos-usuario">
              <img src={perfil} alt="Foto de perfil" />

              <div className="cont-nome-email">
                <span>{name}</span>
                <span>{email}</span>
              </div>
            </div>
          </ListItem>

          <Divider sx={{...divider}}/>

          <ListItem sx={{ ...section }}>Media</ListItem>

          <ListItemButton>
            <ListItemText primary="Filmes" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Séries" />
          </ListItemButton>

          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText primary="Categorias" />
            {open ? <FiChevronUp /> : <FiChevronDown />}
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

              <ListItemButton
                onClick={() => getMedias(tmdb.getMedia)}
                sx={{ ...category }}
              >
                <ListItemText primary='Todos'/>
              </ListItemButton>

              {movieGenres.genres &&
                movieGenres.genres.map((genre) => (
                  <ListItemButton
                    key={genre.id}
                    onClick={() => applyFilter(genre)}
                    sx={{ ...category }}
                  >
                    <ListItemText primary={genre.name} />
                  </ListItemButton>
                ))}
            </List>
          </Collapse>

          <Divider sx={{...divider}}/>

          <ListItem sx={{ ...section }}>Conta</ListItem>

          <ListItemButton>
            <ListItemText primary="Lista de Desejos" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Filmes Assistidos" />
          </ListItemButton>

          <Divider sx={{...divider}}/>

          <ListItemButton>
            <ListItemText primary="Sair" onClick={() => handleLogout()}/>
          </ListItemButton>
        </List>
      </ContainerSidebar>
    </Drawer>
  );
};

export default SidebarMUI;
