import React, { useContext, useEffect, useState } from "react";

import { imagePathPrefix } from "../../assets/js/utils";
import { CustomCard } from "../../components/moviesSlider/styles";
import { WishListContext } from "../../Providers/WishListProvider";


const WishList = () => {
  const [list, setList] = useState(null);
  const {getWishes, removeMovieFromWishList} = useContext(WishListContext)

  const listUpdate = (movie) => {
    setList((currentList) =>
      currentList.filter(({ movieId }) => movieId !== movie.movieId)
    );
  };

  useEffect(() => {
    getWishes()
      .then((movies) => setList(movies))
      .catch((err) => err);
  }, []);

console.log(list)
  return list ? (
    list.map((movie) => (
      <CustomCard key={movie.id}>
        <img
          src={imagePathPrefix + movie.poster_path}
          alt={movie.title}
          width="100%"
        />

        <button
          onClick={() => {
            removeMovieFromWishList(movie.id);
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
