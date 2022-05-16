import React, { useEffect, useState } from "react";

import logo from "../../assets/img/logo.svg";

import loader from "../../assets/img/loader.gif";
import { Link } from "react-router-dom";
import { tmdbAccess } from "../../services/api";
import { StyleContainer } from "./style";

import MoviesSections from "../../components/moviesSlider";
import SearchBar from "../../components/searchBar";

import { useTMDBMedias } from "../../Providers/MediasProvider";
import tmdb, { getByGenre } from "../../services/tmdb";

import { Grid } from "@mui/material";

const Dashboard = () => {
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
    <StyleContainer>
      <aside>{/* COLOCAR A SIDEBAR AQUI */}</aside>

      <header>
        <div className="cont-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <SearchBar />
        </div>
      </header>

      <main>
        <nav>
          <ul>
            <li onClick={() => getMedias(tmdb.getMedia)}>Todos</li>
            {movieGenres.genres &&
              movieGenres.genres.map((genre) => (
                <li key={genre.id} onClick={() => handleFilterClick(genre)}>
                  {genre.name}
                </li>
              ))}
          </ul>
        </nav>

        {isLoading ? (
          <Grid
            spacing={1}
            container
            justifyContent="center"
            alignItems="center"
            height="50vh"
          >
            <Grid xs={1} item>
              <img
                src={loader}
                width="100%"
                style={{ maxWidth: "50px" }}
                alt="loader"
              />
            </Grid>
          </Grid>
        ) : (
          <MoviesSections />
        )}
      </main>
    </StyleContainer>
  );
};

export default Dashboard;
