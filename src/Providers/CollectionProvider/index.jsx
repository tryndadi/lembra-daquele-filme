import React from "react";

import { toast } from "react-toastify";
import { createContext, useContext } from "react";
import { getFromStorage } from "../../assets/js/utils";
import { fakeApiAccess } from "../../services/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const CollectionContext = createContext([]);

const CollectionProvider = ({ children }) => {
  const history = useHistory();

  const getUserInfos = () => getFromStorage("userData") || {};
  const checkIfExists = async (movie) => {
    const { id, accessToken } = getUserInfos();
    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    try {
      const res = await fakeApiAccess.get(
        `/watched/?userId=${id}&movieId=${movie.id}`
      );
      if (res.data.length !== 0) {
        toast.error("Este filme já está na sua coleção");
        return true;
      }
      return false;
    } catch (error) {
      const unauthorizedStatus = [401, 403];

      if (unauthorizedStatus.includes(error.status)) {
        return false;
      }
    }
  };

  const addMovieToCollection = async (movie) => {
    const { id, accessToken } = getUserInfos();

    const collectionHasMovie = await checkIfExists(movie);

    if (!collectionHasMovie) {
      const customMovieData = {
        ...movie,
        movieId: movie.id,
      };

      delete customMovieData.id;

      fakeApiAccess.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${accessToken}`;

      try {
        await fakeApiAccess
          .post("/watched", {
            userId: id,
            ...customMovieData,
          })
          .then((_) => {
            toast.success(" Filme adicionado à sua coleção");
          });
      } catch (error) {
        const unauthorizedStatus = [401, 403];

        if (unauthorizedStatus.includes(error.status)) {
          history.push("/login");
          toast.error("Sua sessão expirou. Efetue login para continuar");
        }

        toast.error("Não foi possível salvar este filme");
      }
    }
  };

  const removeMovieFromCollection = ({ id }) => {
    const { accessToken } = getUserInfos();
    try {
      fakeApiAccess
        .delete(`/watched/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken} `,
          },
        })
        .then((_) => toast.success("Filme removido da sua coleção"));
    } catch (error) {
      const unauthorizedStatus = [401, 403];

      if (unauthorizedStatus.includes(error.status)) {
        history.push("/login");
        toast.error("Sua sessão expirou. Efetue login para continuar");
      }
      toast.error("Não foi possível remover este filme da sua coleção");
    }
  };

//   };

//   const addMovieToCollection = async (movie) => {
//     const { id, accessToken } = getUserInfos();

//     const collectionHasMovie = await checkIfExists(movie);

//     if (!collectionHasMovie) {
//       const customMovieData = {
//         ...movie,
//         movieId: movie.id,
//       };

//       delete customMovieData.id;

//       fakeApiAccess.defaults.headers.post[
//         "Authorization"
//       ] = `Bearer ${accessToken}`;

//       try {
//         await fakeApiAccess
//           .post("/watched", {
//             userId: id,
//             ...customMovieData,
//           })
//           .then((_) => {
//             toast.success(" Filme adicionado à sua coleção");
//           });
//       } catch (error) {
//         const unauthorizedStatus = [401, 403];

//         if (unauthorizedStatus.includes(error.status)) {
//           history.push("/login");
//           toast.error("Sua sessão expirou. Efetue login para continuar");
//         }

//         toast.error("Não foi possível salvar este filme");
//       }
//     }
//   };

//   const removeMovieFromCollection = ({ id }) => {
//     const { accessToken } = getUserInfos();
//     try {
//       fakeApiAccess
//         .delete(`/watched/${id}`, {
//           headers: {
//             Authorization: `Bearer ${accessToken} `,
//           },
//         })
//         .then((_) => toast.success("Filme removido da sua coleção"));
//     } catch (error) {
//       const unauthorizedStatus = [401, 403];

//       if (unauthorizedStatus.includes(error.status)) {
//         history.push("/login");
//         toast.error("Sua sessão expirou. Efetue login para continuar");
//       }
//       toast.error("Não foi possível remover este filme da sua coleção");
//     }
//   };

// >>>>>>> develop
  const getCollection = async () => {
    const { id, accessToken } = getFromStorage("userData") || {};

    if (!id || !accessToken) {
      history.push("/login");
      return;
    }

    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${accessToken}`;

    return await fakeApiAccess
      .get(`/watched/?userId=${id}`)
      .then(({ data }) => data);
  };

  return (
    <CollectionContext.Provider
      value={{
        addMovieToCollection,
        removeMovieFromCollection,
        getCollection,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;
export const useCollection = () => useContext(CollectionContext);
