import React, { useEffect } from "react";
import ReactModal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Image, Infos, BtnAdd, BtnClose, modalStyle } from "./style";
import { Avatar, Rating, Typography, Box, Grid } from "@mui/material";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useInfosModal } from "../../Providers/InfosModalProvider";

const ModalCardFilm = () => {
  const { isOpen, toogle, media } = useInfosModal();

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
      <Grid container spacing={1} alignItems={"center"}>
        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Image src={imagePathPrefix + media.poster_path} />
        </Grid>

        <Grid item xs={12} sm={6} display="flex" justifyContent="center">
          <Infos>
            <section overflow={"auto"}>
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
            </section>

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
            <BtnAdd>Adicionar à coleção</BtnAdd>
            <BtnAdd>Adicionar aos desejados</BtnAdd>
          </Infos>
        </Grid>
      </Grid>
    </ReactModal>
  );
};

export default ModalCardFilm;
