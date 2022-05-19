import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import ReactModal from "react-modal";
import {
  BtnAdd,
  BtnClose,
  ContainerComentario,
  Image,
  Infos,
  modalStyle,
} from "./style";
import { useCommentModal } from "../../Providers/CommentModalProvider";
import { useCommentary } from "../../Providers/CommentaryProvider";
import { Grid, Rating, Typography } from "@mui/material";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const ModalCommentFilm = () => {
  const { isOpen, toggle, media } = useCommentModal();
  const { addComment, getComments } = useCommentary();
  const [comment, setComment] = useState("");
  const [movieComment, setMovieComment] = useState("");
  const [commentMedia, setCommentMedia] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getComments(media.movieId);
      setCommentMedia(res.data.splice(-10));
    })();
  }, [isOpen, movieComment]);

  const imagePathPrefix = "http://image.tmdb.org/t/p/w500/";

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (comment.trim().length > 0) {
      addComment(media.movieId, comment);
      setComment("");
      getComments(media.movieId);
      setMovieComment(comment);
    }
  };
  return (
    <ReactModal
      style={{ ...modalStyle }}
      isOpen={isOpen}
      onRequestClose={toggle}
      ariaHideApp={false}
    >
      <BtnClose onClick={toggle}>
        <FaTimes />
      </BtnClose>
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={imagePathPrefix + media.poster_path} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display="flex"
          justifyContent="space-between"
          flex-direction="column"
        >
          <Infos>
            <Typography variant="h6">{media.title || media.name}</Typography>
            <Typography size={12}>
              <Rating
                sx={{ verticalAlign: "middle" }}
                readOnly
                size="small"
                precision={0.5}
                value={media.vote_average / 2}
                emptyIcon={
                  <StarBorderIcon
                    style={{
                      color: "rgba(255, 255, 255, 0.5)",
                      fontSize: "inherit",
                    }}
                  />
                }
              />
              &nbsp;{media.vote_count} opiniões
            </Typography>
            <ContainerComentario>
              <ul>
                {commentMedia.map((item) => {
                  return (
                    <li key={item.id}>
                      <p>{item.message}</p>
                    </li>
                  );
                })}
              </ul>
            </ContainerComentario>

            <form onSubmit={(evt) => handleSubmit(evt)}>
              <input
                minLength="2"
                maxLength="90"
                value={comment}
                onChange={(evt) => setComment(evt.target.value)}
              />
              <BtnAdd type="submit">Enviar Comentário</BtnAdd>
            </form>
          </Infos>
        </Grid>
      </Grid>
    </ReactModal>
  );
};

export default ModalCommentFilm;
