import React from "react";
import styles from "./css/Card.module.css";
import { Rating } from "@mui/material";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { styled } from "@mui/material/styles";

const Card = (props) => {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#264343",
    },
  });

  return (
    <div className={styles.mainCard}>
      <img src={props.image} className={styles.cardImg} />
      <div className={styles.cardInfo}>
        <div className={styles.cardTitle}>{props.name}</div>
        <div className={styles.cardCaption}>{props.address}</div>
        <div className={styles.cardRating}>
          {/* <Rating
            name="half-rating-read"
            defaultValue={
              props.reviewRating.ratingTotal /
              props.reviewRating.reviewCount /
              2
            }
            precision={0.5}
            sx={{ color: "#264343", fontSize: 19 }}
            readOnly
          /> */}
          <StyledRating
            name="customized-color"
            defaultValue={
              props.reviewRating.ratingTotal /
              props.reviewRating.reviewCount /
              2
            }
            precision={0.5}
            icon={<StarRoundedIcon sx={{ fontSize: 20 }} />}
            emptyIcon={<StarOutlineRoundedIcon sx={{ fontSize: 20 }} />}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
