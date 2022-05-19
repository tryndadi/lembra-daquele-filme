import React, { useContext, useEffect, useState } from "react";

import { imagePathPrefix } from "../../assets/js/utils";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { toast } from "react-toastify";
import { Grid } from "@mui/material";
import { StyleContainer, CustomCard } from "../Watched/style";

import logo from "../../assets/img/logo.svg";
import loader from "../../assets/img/loader.svg";

import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import { WishListContext } from "../../Providers/WishListProvider";
import { useTMDBMedias } from "../../Providers/MediasProvider";
import { useUser } from "../../Providers/UserProvider";

const WishList = () => {
  const [list, setList] = useState(null);
  const { getWishes, removeMovieFromWishList } = useContext(WishListContext);
  const { isLoggedIn } = useUser();
  const { isLoading } = useTMDBMedias();

  const history = useHistory();

  const listUpdate = (movie) => {
    setList((currentList) =>
      currentList.filter(({ movieId }) => movieId !== movie.movieId)
    );
  };

  useEffect(() => {
    getWishes()
      .then((movies) => setList(movies))
      .catch(({ response }) => {
        const errorStatus = [401];

        if (errorStatus.includes(response.status)) {
          history.push("/login");
          toast.error("Sua sessão expirou. Efetue o login novamente");
        }
      });
  }, []);

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
          {list && isLoading ? (
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
            list &&
            list.map((movie) => (
              <CustomCard key={movie.movieId}>
                <div className="movie-tittle">
                  <img
                    src={imagePathPrefix + movie.poster_path}
                    alt={movie.title}
                    width="100%"
                  />
                  <span>{movie.title}</span>
                </div>
                <div>
                  <button
                    onClick={() => {
                      removeMovieFromWishList(movie);
                      listUpdate(movie);
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
    <Redirect to="/login" />
  );
};

export default WishList;

/* 
const WishList = () => {

  const [list, setList] = useState(null)
  const history = useHistory();

  const {getWishes, removeMovieFromWishList} = useContext(WishListContext)

  const listUpdate = (movie) => {
    setList((currentList) =>
      currentList.filter(({ movieId }) => movieId !== movie.movieId)
    );
  };

  useEffect(() => {
    getWishes()
      .then((movies) => setList(movies))
      .catch(({ response }) => {
        const errorStatus = [401];

        if (errorStatus.includes(response.status)) {
          history.push("/login");
          toast.error("Sua sessão expirou. Efetue o login novamente");
        }
      });
  }, []);

console.log(list)
  return list ? (
    list.map((movie) => (
      <CustomCard key={movie.movieId}>
        <img
          src={imagePathPrefix + movie.poster_path}
          alt={movie.title}
          width="100%"
        />

        <button
          onClick={() => {
            removeMovieFromWishList(movie);
            listUpdate(movie);
          }}
        >
          remover
        </button>
      </CustomCard>
    ))
  ) : (
    <h1>Sua lista está vazia</h1>
  );
};

export default WishList; */
