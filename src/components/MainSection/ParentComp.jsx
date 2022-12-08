import { NoResultFound, FlexContainer } from "../../styles/App.styles";
import React from "react";
import MovieComp from "../MovieSection/MovieComp";

const ParentComp = ({ filterData }) => {
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
