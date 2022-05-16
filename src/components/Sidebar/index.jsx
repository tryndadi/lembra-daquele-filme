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

  const [movieGenres, setMovieGenres] = useState([]);
  const { isLoading, getMedias } = useTMDBMedias();

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
