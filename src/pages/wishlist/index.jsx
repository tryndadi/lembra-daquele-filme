import React, { useContext, useEffect, useState } from "react";

import { imagePathPrefix } from "../../assets/js/utils";
import { CustomCard } from "../../components/moviesSlider/styles";
import { WishListContext } from "../../Providers/WishListProvider";

const WishList = () => {
  const [list, setList] = useState(null);
  const { getWishes, removeMovieFromWishList } = useContext(WishListContext);

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

  console.log(list);
  return list ? (
    list.map(({ body, id }) => (
      <CustomCard key={body.id}>
        <img
          src={imagePathPrefix + body.poster_path}
          alt={body.title}
          width="15%"
        />

        <button
          onClick={() => {
            removeMovieFromWishList(id);
            listUpdate(body);
          }}
        >
          remover
        </button>
      </CustomCard>
    ))
  ) : (
    <a>
      <img src="https://svgsilh.com/svg/1801287.svg" alt="gato" />
      <h1>Sua lista está vazia...</h1>
    </a>
  );
};

export default WishList;
