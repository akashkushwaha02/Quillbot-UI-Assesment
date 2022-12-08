import {
  GridCardContainer,
  Card,
  CardMovieName,
  CardIconContainer,
  CardPlayIcon,
  CardAddIcon,
  CardImage,
  NoResultFound,
  FlexContainer,
  Banner,
  MovieRow,
} from "../Container/App.styles";
import React, { useState, useEffect } from "react";
import AddIconCard from "../../assets/svg/AddIconCard";
import PlayButtonCard from "../../assets/svg/PlayButtonCard";
import ExtendedCardComp from "../ExtendedCard/ExtendedCardComp";
import MovieComp from "../MovieSection/MovieComp";

const ParentComp = ({ filterData }) => {
  // const [expandDetail, setExpandDetail] = useState(true);
  console.log(filterData, "filteredData");

  return (
    <>
      {filterData?.length <= 0 && (
        <NoResultFound>No result found for your search.</NoResultFound>
      )}

      <FlexContainer>
        <MovieComp filterData={filterData} />
      </FlexContainer>
    </>
  );
};

export default ParentComp;
