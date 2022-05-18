import React, { useEffect } from "react";
import ReactModal from "react-modal";

import { FaTimes } from "react-icons/fa";
import {
  Image,
  Infos,
  BtnClose,
  ModalBody,
  modalStyle,
  HorizontalFade,
} from "./style";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useInfosModal } from "../../Providers/InfosModalProvider";
import { useCollection } from "../../Providers/CollectionProvider";
import { Avatar, Button, Rating, Typography, Box, Grid } from "@mui/material";

const ModalCardFilm = () => {
  const { isOpen, toogle, media } = useInfosModal();
  const { addMovieToCollection } = useCollection();

  const imagePathPrefix = "http://image.tmdb.org/t/p/w500/";

  return (
    <ReactModal
      style={{ ...modalStyle }}
      isOpen={isOpen}
      onRequestClose={toogle}
      ariaHideApp={false}
    >
      <BtnClose onClick={toogle}>
        <FaTimes />
      </BtnClose>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Image src={imagePathPrefix + media.poster_path} />
        </Grid>

        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Infos>
            <Typography variant="h6">{media.title || media.name}</Typography>
            <Typography size={16}>{media.overview}</Typography>
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
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                margin: "10px 0",
              }}
            >
              <Typography>Quem viu:</Typography>
              <Avatar sx={{ width: "30px", height: "30px" }}>M</Avatar>
              <Avatar sx={{ width: "30px", height: "30px" }}>A</Avatar>
            </Box>
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={() => addMovieToCollection(media)}
            >
              Adicionar à coleção
            </Button>
            <Button variant="contained" sx={{ textTransform: "none" }}>
              Adicionar aos desejados
            </Button>
          </Infos>
        </Grid>
      </Grid>
    </ReactModal>
  );
};

export default ModalCardFilm;
