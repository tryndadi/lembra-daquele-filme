import React, { useContext, useEffect, useState } from "react";

import { imagePathPrefix } from "../../assets/js/utils";
import { CustomCard } from "../../components/moviesSlider/styles";
import { CollectionContext } from "../../Providers/CollectionProvider";

import logo from "../../assets/img/logo.svg";
import loader from "../../assets/img/loader.svg";

import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { StyleContainer } from "./style";
import { Redirect } from "react-router-dom";

import SearchBar from "../../components/searchBar";
import { useUser } from "../../Providers/UserProvider";
import { useTMDBMedias } from "../../Providers/MediasProvider";

const Watched = () => {
  const [collection, setcCollection] = useState(null);
  const { getCollection, removeMovieFromCollection } = useContext(
    CollectionContext
  );

  const collectionUpdate = (movie) => {
    setcCollection((currentCollection) =>
      currentCollection.filter(({ movieId }) => movieId !== movie.movieId)
    );
  };

  useEffect(() => {
    getCollection()
      .then((movies) => setcCollection(movies))
      .catch((err) => err);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    history.push("/");
  };
  return isLoggedIn ? (
    <StyleContainer>
      <div className="cont-geral-dashboard">
        <header>
          <div className="cont-header">
            <div className="menu" onClick={() => history.push("/dashboard")}>
              <FaAngleDoubleLeft width={70} />
              <span>Voltar</span>
            </div>

            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </header>

        <main>
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
            collection &&
            collection.map((movie) => (
              <CustomCard key={movie.movieId}>
                <img
                  src={imagePathPrefix + movie.poster_path}
                  alt={movie.title}
                  width="100%"
                />
                <div>
                  <button
                    onClick={() => {
                      removeMovieFromCollection(movie);
                      collectionUpdate(movie);
                    }}
                  >
                    Remover
                  </button>
                </div>
              </CustomCard>
            ))
          )}
        </main>
      </div>
    </StyleContainer>
  ) : (
    <h1>Olá</h1>
  );
};
export default Watched;
