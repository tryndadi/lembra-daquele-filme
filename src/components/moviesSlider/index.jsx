import React from "react";
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
} from "./styles";

import { useTMDBMedias } from "../../Providers/MediasProvider";
import { useTrailer } from "../../Providers/TrailersProvider";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import { imagePathPrefix } from "../../assets/js/utils";
import { Rating, Typography } from "@mui/material";

import { IoIosAddCircle } from "react-icons/io";
import { BiCameraMovie } from "react-icons/bi";

import TrailerModal from "../TrailerModal";
import CustomIconButton from "../CustomIconButton";

const MoviesSections = () => {
  const { mediasList } = useTMDBMedias();
  const { getTrailer, traillerId, isOpen, setIsOpen } = useTrailer();

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
                          <CustomIconButton
                            title="Ver Trailer"
                            onClick={() => getTrailer(media)}
                          >
                            <BiCameraMovie style={{ ...iconStyle }} />
                          </CustomIconButton>
                          <CustomIconButton title="Mais informações">
                            <IoIosAddCircle style={{ ...iconStyle }} />
                          </CustomIconButton>
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
      <TrailerModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        traillerId={traillerId}
      />
    </div>
  );
};

export default MoviesSections;
