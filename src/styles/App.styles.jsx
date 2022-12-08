import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  background-color: #1f2a3c;
`;

export const SidePanel = styled.div`
  height: auto;
  background-color: #1f2a3c;

  width: 275px;
  @media (max-width: 420px) {
    display: ${(props) => (props.closeMenu ? "block" : "none")};
    width: 100%;
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #d4d7dd;
  font-size: 35px;
  cursor: pointer;

  @media (min-width: 640px) {
    display: none;
  }
`;

export const MainContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #273244;
  @media (max-width: 420px) {
    display: ${(props) => (props.extendNav ? "none" : "block")};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 57px;
  margin-bottom: 56px;
  padding-left: 48px;
  padding-right: 49px;
  @media (max-width: 420px) {
    margin-top: 20px;
    margin-bottom: 26px;
    padding-left: 0;
    padding-right: 20px;
  }
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    margin-right: 9%;
  }
`;
export const SearchBarLogo = styled.div`
  position: absolute;

  z-index: 1;
  margin: 15px 12px 17px 16px;
`;

export const SearchBarCrossLogo = styled.div`
  position: absolute;

  z-index: 1;
  margin: 20px 20px 20px 530px;
  @media (max-width: 420px) {
    margin: 20px 20px 20px 215px;
  }
`;

export const SearchBarInput = styled.input`
  position: absolute;
  border: none;
  padding-left: 51px;
  width: 567px;
  height: 55px;

  background: #1a2536;
  border-radius: 8px;

  font-size: 21px;
  line-height: 44px;

  color: #ffffff;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;

  @media (max-width: 420px) {
    position: static;
    width: 240px;
    height: 55px;

    background: #1a2536;
    border-radius: 8px;

    font-size: 21px;
    line-height: 44px;

    color: #ffffff;

    font-weight: 600;
  }
`;

export const SearchBarInputMobile = styled.input`
  display: none;
`;

export const NoResultFound = styled.div`
  padding-left: 48px;
  padding-top: 39px;

  font-weight: 600;
  font-size: 21px;
  line-height: 44px;

  color: #ffffff;
`;

export const ThemeMenuWrapper = styled.div`
  display: flex;

  @media (max-width: 420px) {
    display: none;
  }
`;

export const ThemeChanger = styled.div``;

export const ThreeDotMenu = styled.div`
  margin-left: 25px;
`;

export const GridCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 178px);

  height: auto;
  row-gap: 37px;
  column-gap: 26px;
  margin-left: 48px;
  margin-right: 49px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    row-gap: 0;
    margin-bottom: 10px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div``;
export const MovieRow = styled.div`
  margin-bottom: 26px;
`;

export const MovieBannerContainer = styled.div``;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 178px;
  min-height: 278px;
  border-radius: 11px;
  background-color: #394b61;
  padding-top: 10px;
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
    row-gap: 0;
    width: 100%;
    min-height: 336px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 191px;
  border-bottom: 1px solid #394b61;
  @media (max-width: 420px) {
    position: relative;
  }
`;

export const ProfileSectionClose = styled.div`
  display: none;
  @media (max-width: 420px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50px;
  margin-bottom: 10px;
  margin-top: 45px;
`;

export const ProfileName = styled.div`
  margin-bottom: 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  color: #d4d7dd;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 210px;
  padding-top: 24px;
  padding-bottom: 26px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 37px;
  /* or 247% */

  color: #d4d7dd;
  border-bottom: 1px solid #394b61;
`;

export const WatchLaterSection = styled.div`
  min-height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 24px;
  padding-bottom: 26px;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 37px;
  /* or 247% */

  color: #d4d7dd;
  border-bottom: 1px solid #394b61;
`;

export const SettingSection = styled.div`
  margin-top: 11px;
  display: flex;
  flex-direction: column;

  align-items: center;

  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 37px;
  /* or 247% */

  color: #d4d7dd;
`;

export const CardMovieName = styled.div`
  margin-left: 10px;
  margin-top: 12px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;

  color: #d4d7dd;

  @media (max-width: 420px) {
    margin-left: 0;
    display: flex;
    justify-content: center;
  }
`;

export const CardIconContainer = styled.span`
  margin-left: 10px;
  margin-top: 12px;
  display: flex;
  gap: 16px;

  margin-bottom: 10px;
  @media (max-width: 420px) {
    justify-content: center;
    margin-left: 0;
  }
`;

export const CardPlayIcon = styled.div`
  height: 20px;
  width: 20px;
`;

export const CardAddIcon = styled.div`
  height: 20px;
  width: 20px;
`;

export const CardImage = styled.img`
  width: 157px;
  height: 188px;

  margin-left: 9px;
  border-radius: 6px;
  @media (max-width: 420px) {
    width: 100%;
    height: 360px;
    padding-right: 19px;
    border-radius: 6px;
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  padding-left: 52px;
  display: flex;

  @media (max-width: 420px) {
    padding-left: 32%;
    margin-left: 0;
  }
`;

export const MenuWrapperInner1 = styled.div``;
export const MenuWrapperInner2 = styled.div`
  display: flex;

  width: inherit;
  justify-content: space-between;
`;

export const MenuIcon = styled.div`
  height: 16px;
  weight: 16px;
`;
export const MenuName = styled.div`
  margin-left: 14px;

  &.active {
    color: #00e0ff;
  }
`;

export const MenuActiveDiv = styled.div`
  width: 3px;
  height: 33px;
  justify-content: center;
  background: #00e0ff;
`;

export const ExpandedMovieCardWrapper = styled.div`
  height: 389px;

  background: #394b61;
  border-radius: 11px;
  margin-left: 48px;
  margin-right: 49px;
  margin-bottom: 26px;
  display: flex;
  @media (max-width: 420px) {
    height: auto;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const ExpandedMovieBanner = styled.img`
  flex: 3;
  height: auto;
  width: 100px;
  border-radius: 11px 0 0 11px;
  @media (max-width: 420px) {
    width: 340px;
  }
`;

export const ExpandedMovieContent = styled.div`
  flex: 7;

  margin-left: 35px;
  margin-top: 34px;
  padding-right: 42px;
  @media (max-width: 420px) {
    margin-top: 10px;
    padding-right: 15px;
    margin-bottom: 12px;
  }
`;

export const ExpandedMovieTitle = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;

  color: #d4d7dd;
`;
export const ExpandedMovieProgressBar = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 31px;
  /* identical to box height, or 194% */

  color: #ffffff;
`;
export const ExpandedMovieYear = styled.div`
  margin-top: 8px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  color: #ffffff;
`;

export const ExpandedMovieYearSubWrapper = styled.div`
  display: flex;

  margin-top: 16px;
`;

export const ExpandedMovieYearSub1 = styled.div`
  width: 143px;
`;

export const ExpandedMovieYearSub2 = styled.div``;

export const ExpandedMovieDescr = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  /* or 129% */

  color: #ffffff;
  margin-top: 24px;
`;
export const ExpandedMovieButtonWrapper = styled.div`
  margin-top: 21px;
  display: flex;
  gap: 10px;
`;
export const ButtonPlayMovie = styled.button`
  width: 154px;
  height: 38px;

  background: ${(props) => (props.filled ? "#00e0ff" : "#394b61")};
  border-radius: 5px;
  border: none;
  border: ${(props) => (props.outlined ? "1px solid #00e0ff" : "")};
`;

export const ButtonWatch = styled.button`
  box-sizing: border-box;
  margin-left: 16px;
  width: 154px;
  height: 38px;
  background-color: #394b61;
  border: 1px solid #00e0ff;
  border-radius: 5px;
`;

export const Typography1 = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;

  text-align: center;

  color: #000000;
  color: ${(props) => (props.color == "white" ? "#00e0ff" : "#000000")};
`;

export const SearchDiv = styled.div`
  position: absolute;
  left: 1010px;
  top: 45px;
  width: 50px;
  height: 5px;
`;
