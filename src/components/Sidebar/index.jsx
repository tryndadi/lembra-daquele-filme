import React, { useEffect, useState } from "react";

import { tmdbAccess } from "../../services/api";
import { getByGenre } from "../../services/tmdb";
import { getFromStorage } from "../../assets/js/utils";
import { useTMDBMedias } from "../../Providers/MediasProvider";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import { ListItem, Drawer } from "@mui/material";
import { ContainerSidebar, section, category } from "./style";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SidebarMUI = ({ openSidebar, setOpenSidebar }) => {
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
    <Drawer open={openSidebar} onClose={() => setOpenSidebar(false)}>
      <ContainerSidebar>
        <List>
          <ListItem>
            <div className="cont-infos-usuario">
              <img src="" alt="Foto de perfil" />

              <div className="cont-nome-email">
                <span>{name}</span>
                <span>{email}</span>
              </div>
            </div>
          </ListItem>

          <div className="divider" />

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

          <div className="divider" />

          <ListItem sx={{ ...section }}>Conta</ListItem>

          <ListItemButton>
            <ListItemText primary="Biblioteca" />
          </ListItemButton>

          <ListItemButton>
            <ListItemText primary="Perfil" />
          </ListItemButton>

          <div className="divider" />

          <ListItemButton>
            <ListItemText primary="Sair" />
          </ListItemButton>
        </List>
      </ContainerSidebar>
    </Drawer>
  );
};

export default SidebarMUI;
