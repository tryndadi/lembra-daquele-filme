import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { imagePathPrefix } from "../../assets/js/utils";
import { CustomCard } from "../../components/moviesSlider/styles";
import { WishListContext } from "../../Providers/WishListProvider";


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

export default WishList;
