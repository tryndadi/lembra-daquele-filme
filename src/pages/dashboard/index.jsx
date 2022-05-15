import React, { useEffect, useState } from "react";

import logo from "../../assets/img/logo.svg";

import loader from "../../assets/img/loader.gif";
import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";
import { tmdbAccess } from "../../services/api";
import { StyleContainer } from "./style";

import MoviesSections from "../../components/moviesSlider";
import SearchBar from "../../components/searchBar";

import { useTMDBMedias } from "../../Providers/MediasProvider";
import { CircularProgress, Grid } from "@mui/material";
import { blue } from "@mui/material/colors";

const Dashboard = () => {
  const [movieGenres, setMovieGenres] = useState([]);
  const { isLoading } = useTMDBMedias();

  useEffect(() => {
    tmdbAccess
      .get("/genre/movie/list?&language=pt-BR")
      .then((resp) => setMovieGenres(resp.data))
      .catch((err) => console.log(`erro getGenres => ${err}`));
  }, []);

  return (
    <>
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
              <li>Todos</li>
              {movieGenres.genres &&
                movieGenres.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
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

          {/* <ul className="slide">
            <h3>TOP Filmes</h3>

           
          </ul>

          <ul className="slide">
            <h3>Melhores Filmes</h3>

           
          </ul>

          <ul className="slide">
            <h3>Melhores Séries</h3>

           
          </ul> */}
        </main>
      </StyleContainer>
    </>
  );
};

export default Dashboard;
