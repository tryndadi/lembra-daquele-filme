import React from "react";

import { VerticalFade } from "./styles";
import { BiCameraMovie } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import { Rating, Typography } from "@mui/material";
import CustomIconButton from "../CustomIconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useTrailer } from "../../Providers/TrailersProvider";
import { ButtonsSection, InfosSection, iconStyle } from "./styles";

import { useInfosModal } from "../../Providers/InfosModalProvider";

const CardFade = ({ media, setIsInfosModalOpen }) => {
  const { toogle } = useInfosModal();
  const { getTrailer } = useTrailer();

  return (
    <VerticalFade>
      <ButtonsSection>
        <CustomIconButton title="Ver Trailer" onClick={() => getTrailer(media)}>
          <BiCameraMovie style={{ ...iconStyle }} />
        </CustomIconButton>
        <CustomIconButton title="Mais informações" onClick={toogle}>
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
  );
};

export default CardFade;
