import React, { useContext, useState } from "react";
import { createContext } from "react";
import { fakeApiAccess } from "../../services/api";
import { toast } from "react-toastify";

export const CommentaryContext = createContext([]);

const CommentaryProvider = ({ children }) => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [commentsMovie, setCommentsMovie] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [media, setMedia] = useState([]);

  const getComments = async (idMovie) => {
    // fakeApiAccess
    //   .get(`api/comments/movie/${idMovie}`)
    //   .then((res) => setCommentsMovie(res.data.splice(-10)))
    //   .catch((err) => console.log(err));
    fakeApiAccess.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userData.accessToken}`;

    fakeApiAccess
      .get(`comments/?movieId=${idMovie}`)
      .then((res) => {
        setCommentsMovie(res.data.splice(-10));
      })
      .catch((err) => console.log(err));
  };

  const toogle = (data) => {
    setMedia(data || []);
    setTimeout(() => {
      setIsOpen((currentState) => !currentState);
    }, 1000);
  };

  const addComment = (idMovie, comment) => {
    fakeApiAccess.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${userData.accessToken}`;
    fakeApiAccess
      .post("/comments", {
        userId: userData.id,
        message: comment,
        movieId: idMovie,
      })
      .then((res) => toast.success("Comentário enviado com sucesso!"))
      .catch((err) =>
        toast.error(
          "Algo deu errado! Não foi possível adicionar seu comentário :("
        )
      )
      .finally(
        (_) => delete fakeApiAccess.defaults.headers.common["Authorization"]
      );
  };

  const deleteComment = (idComment) => {
    fakeApiAccess
      .delete(`/comments/${idComment}`, {
        headers: {
          Authorization: `Bearer ${userData.accessToken}`,
        },
      })
      .then((res) => toast.success("Comentário excluído com sucesso!"))
      .catch((err) =>
        toast.error(
          "Algo deu errado! Não foi possível excluir seu comentário :("
        )
      );
  };

  return (
    <CommentaryContext.Provider
      value={{
        addComment,
        deleteComment,
        getComments,
        commentsMovie,
        isOpen,
        setIsOpen,
        setMedia,
        media,
        toogle,
      }}
    >
      {children}
    </CommentaryContext.Provider>
  );
};

export default CommentaryProvider;
export const useCommentary = () => useContext(CommentaryContext);
