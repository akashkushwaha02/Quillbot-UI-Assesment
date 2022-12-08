import ButtonComp from "../Button/ButtonComp";
import {
  ExpandedMovieCardWrapper,
  ExpandedMovieBanner,
  ExpandedMovieContent,
  ExpandedMovieTitle,
  ExpandedMovieProgressBar,
  ExpandedMovieYear,
  ExpandedMovieYearSubWrapper,
  ExpandedMovieYearSub1,
  ExpandedMovieYearSub2,
  ExpandedMovieDescr,
  ExpandedMovieButtonWrapper,
  ButtonPlayMovie,
  ButtonWatch,
  Typography1,
  Typography2,
} from "../Container/App.styles";

const ExtendedCardComp = ({ data }) => {
  console.log(data, "data inside extendedCard");

  const {
    Poster,
    Title,
    imdbRating,
    Year,
    Runtime,
    Director,
    Language,
    Plot,
    Images,
  } = data;
  return (
    <>
      <ExpandedMovieCardWrapper>
        <ExpandedMovieBanner
          src={Poster}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = Images[0];
          }}
          alt={Title}
        />
        <ExpandedMovieContent>
          <ExpandedMovieTitle>{Title}</ExpandedMovieTitle>
          <ExpandedMovieProgressBar>
            {" "}
            progress bar {imdbRating}
          </ExpandedMovieProgressBar>
          <ExpandedMovieYear>
            <ExpandedMovieYearSubWrapper>
              <ExpandedMovieYearSub1>Year: </ExpandedMovieYearSub1>
              <ExpandedMovieYearSub2>{Year}</ExpandedMovieYearSub2>
            </ExpandedMovieYearSubWrapper>

            <ExpandedMovieYearSubWrapper>
              <ExpandedMovieYearSub1>Running time: </ExpandedMovieYearSub1>
              <ExpandedMovieYearSub2>{Runtime} </ExpandedMovieYearSub2>
            </ExpandedMovieYearSubWrapper>
            <ExpandedMovieYearSubWrapper>
              <ExpandedMovieYearSub1>Director: </ExpandedMovieYearSub1>
              <ExpandedMovieYearSub2>{Director} </ExpandedMovieYearSub2>
            </ExpandedMovieYearSubWrapper>
            <ExpandedMovieYearSubWrapper>
              <ExpandedMovieYearSub1>Language: </ExpandedMovieYearSub1>
              <ExpandedMovieYearSub2>{Language} </ExpandedMovieYearSub2>
            </ExpandedMovieYearSubWrapper>
          </ExpandedMovieYear>
          <ExpandedMovieDescr>{Plot}</ExpandedMovieDescr>
          <ExpandedMovieButtonWrapper>
            <ButtonComp label={"Play Movie"} filled={true} />
            <ButtonComp label={"Watch Trailer"} filled={false} />
          </ExpandedMovieButtonWrapper>
        </ExpandedMovieContent>
      </ExpandedMovieCardWrapper>
    </>
  );
};

export default ExtendedCardComp;
