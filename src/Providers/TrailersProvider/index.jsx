import React, { createContext, useState, useContext } from "react";
import { tmdbAccess } from "../../services/api";
import { toast } from "react-toastify";

const TrailersContext = createContext();

const TrailersProvider = ({ children }) => {
  const [traillerId, setTraillerId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getTrailer = async (media) => {
    setIsOpen(true);

    try {
      const videos = await tmdbAccess
        .get(`/movie/${media.id}/videos?language=pt-BR`)
        .then(({ data }) => data.results);

      const selectedMovie = videos.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      setTraillerId(selectedMovie.key);
      setIsOpen(true);
    } catch (error) {
      try {
        const videos = await tmdbAccess
          .get(`/tv/${media.id}/videos?language=pt-BR`)
          .then(({ data }) => data.results);

        const selectedMovie = videos.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );

        setTraillerId(selectedMovie.key);
        setIsOpen(true);
      } catch (error) {
        toast.error("Nenhum vídeo encontrado.");
      }
    }
  };

  return (
    <TrailersContext.Provider
      value={{ traillerId, isOpen, setIsOpen, getTrailer }}
    >
      {children}
    </TrailersContext.Provider>
  );
};

export const useTrailer = () => useContext(TrailersContext);
export default TrailersProvider;
