import React, { useState } from "react";
import {
  CustomCard,
  CustomSlider,
  settings,
  customSettings,
  VerticalFade,
  InfosSection,
  ButtonsSection,
  SliderContainer,
  iconStyle,
  modalStyles,
} from "./styles";

import { toast } from "react-toastify";
import { useTMDBMedias } from "../../Providers/MediasProvider";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { imagePathPrefix } from "../../assets/js/utils";
import { Rating, Typography } from "@mui/material";

import { IoIosAddCircle } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";

import ReactModal from "react-modal";
import TraillerPlayer from "../TraillerPlayer";

import { tmdbAccess } from "../../services/api";

const MoviesSections = () => {
  const [traillerId, setTraillerId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const { mediasList } = useTMDBMedias();

  const handleCLick = async (media) => {
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
      toast.error("Nenhum vídeo encontrado.");
    }
  };

  return (
    <div>
      {mediasList &&
        mediasList.map(
          (medias, i) =>
            medias && (
              <SliderContainer key={i}>
                <Typography variant="h6">{medias.title}</Typography>
                <CustomSlider {...(i === 0 ? customSettings : settings)}>
                  {medias.items.map((media) => (
                    <CustomCard key={media.id} custom={i === 0 ? true : false}>
                      <VerticalFade>
                        <ButtonsSection>
                          <BiCameraMovie
                            style={{ ...iconStyle }}
                            onClick={() => handleCLick(media)}
                          />
                          <IoIosAddCircle style={{ ...iconStyle }} />
                        </ButtonsSection>
                        <InfosSection>
                          <Typography>{media.title || media.name}</Typography>
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
                        </InfosSection>
                      </VerticalFade>
                      <img
                        src={
                          imagePathPrefix +
                          (i !== 0 ? media.poster_path : media.backdrop_path)
                        }
                        alt={media.title}
                        width="100%"
                      />
                    </CustomCard>
                  ))}
                </CustomSlider>
              </SliderContainer>
            )
        )}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{ ...modalStyles }}
      >
        <TraillerPlayer id={traillerId} />
      </ReactModal>
    </div>
  );
};

export default MoviesSections;
