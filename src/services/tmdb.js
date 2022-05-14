import { tmdbAccess } from "./api";

export default {
  getMedia: async () => {
    return [
      {
        keyWord: "originals",
        title: "Originais da Netflix",
        items: await tmdbAccess.get(
          "/discover/tv?with_network=213&language=pt-BR"
        ),
      },
      {
        keyWord: "populars",
        title: "Filmes mais populares",
        items: await tmdbAccess.get("/movie/popular/?language=pt-BR"),
      },
      {
        keyWord: "popularsTV",
        title: "Séries mais populares",
        items: await tmdbAccess.get("/tv/popular/?language=pt-BR"),
      },
      {
        keyWord: "trending",
        title: "Recomendados para você",
        items: await tmdbAccess.get("/trending/all/week?language=pt-BR"),
      },
      {
        keyWord: "toprated",
        title: "Em Alta",
        items: await tmdbAccess.get("/movie/top_rated/?language=pt-BR"),
      },
      {
        keyWord: "action",
        title: "Ação",
        items: await tmdbAccess.get(
          "/discover/movie?with_genres=28&language=pt-BR"
        ),
      },
      {
        keyWord: "comedy",
        title: "Comédia",
        items: await tmdbAccess.get(
          "/discover/movie?with_genres=35&language=pt-BR"
        ),
      },
      {
        keyWord: "horror",
        title: "Terror",
        items: await tmdbAccess.get(
          "/discover/movie?with_genres=27&language=pt-BR"
        ),
      },
      {
        keyWord: "romance",
        title: "Romance",
        items: await tmdbAccess.get(
          "/discover/movie?with_genres=10749&language=pt-BR"
        ),
      },
      {
        keyWord: "documentary",
        title: "Documentários",
        items: await tmdbAccess.get(
          "/discover/movie?with_genres=99&language=pt-BR"
        ),
      },
    ];
  },
};
