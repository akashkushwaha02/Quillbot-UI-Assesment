import React, { useState } from "react";
import {
  GridCardContainer,
  Card,
  CardMovieName,
  CardIconContainer,
  CardPlayIcon,
  CardAddIcon,
  CardImage,
  Banner,
  MovieRow,
  MovieBannerContainer,
} from "../../styles/App.styles";
import ExtendedCardComp from "../ExtendedCard/ExtendedCardComp";
import AddIconCard from "../../assets/svg/AddIconCard";
import PlayButtonCard from "../../assets/svg/PlayButtonCard";
import { slicing } from "./util";
import useWindowSize from "../../Hooks/useWindowSize";

const MovieComp = ({ filterData }) => {
  const [expandDetails, setExpandDetails] = useState(false);
  const [cardDataState, setCardDataState] = useState();
  const [parentIndexState, setParentIndexState] = useState();

  const windowSize = useWindowSize();
  let data;
  if (filterData) {
    data =
      windowSize.width > 480 ? slicing(filterData, 5) : slicing(filterData, 1);
  }

  const handleCardClick = (e, title, cardData, parentIndex, index) => {
    setExpandDetails(!expandDetails);
    setParentIndexState(parentIndex);
    setCardDataState(cardData);
  };

  return (
    <>
      {data &&
        data.map((datum, parentIndex) => {
          return (
            <MovieBannerContainer key={parentIndex}>
              {expandDetails && parentIndexState === parentIndex ? (
                <Banner>
                  <ExtendedCardComp data={cardDataState} />
                </Banner>
              ) : null}

              <MovieRow>
                <GridCardContainer>
                  {datum &&
                    datum.map((card, index) => {
                      return (
                        <Card
                          key={index}
                          onClick={(e) =>
                            handleCardClick(
                              e,
                              card?.Title,
                              card,
                              parentIndex,
                              index
                            )
                          }
                        >
                          <CardImage
                            src={card?.Poster}
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src = card?.Images[0];
                            }}
                            alt={card?.Title}
                          />
                          <CardMovieName>{card?.Title}</CardMovieName>
                          <CardIconContainer>
                            <CardPlayIcon>
                              <PlayButtonCard />
                            </CardPlayIcon>
                            <CardAddIcon>
                              <AddIconCard />
                            </CardAddIcon>
                          </CardIconContainer>
                        </Card>
                      );
                    })}
                </GridCardContainer>
              </MovieRow>
            </MovieBannerContainer>
          );
        })}
    </>
  );
};
export default MovieComp;
