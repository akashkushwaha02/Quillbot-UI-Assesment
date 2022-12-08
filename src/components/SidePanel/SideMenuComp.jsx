import {
  SidePanel,
  ProfileSection,
  MenuSection,
  WatchLaterSection,
  SettingSection,
  MenuWrapper,
  MenuIcon,
  MenuName,
  ProfileName,
  ProfileImage,
  OpenLinksButton,
  ProfileSectionClose,
  MenuActiveDiv,
  MenuWrapperInner1,
  MenuWrapperInner2,
} from "../Container/App.styles";
import { useState } from "react";
import IconMenuLogout from "../../assets/svg/IconMenuLogout";
import IconMenuDiscover from "../../assets/svg/IconMenuDiscover";
import IconMenuPlaylist from "../../assets/svg/IconMenuPlaylist";
import IconMenuMovie from "../../assets/svg/IconMenuMovie";
import IconMenuTVShows from "../../assets/svg/IconMenuTVShows";
import IconMenuMyList from "../../assets/svg/IconMenuMyList";
import IconMenuWatchLater from "../../assets/svg/IconMenuWatchLater";
import IconMenuRecommended from "../../assets/svg/IconMenuRecomended";
import IconMenuSettings from "../../assets/svg/IconMenuSettings";

const SideMenuComp = ({ extendNav, onChangeMenu }) => {
  console.log(extendNav, "Side menu");
  //const [closeMenu, setCloseMenu] = useState(extendNav);
  const mobileMenu = (curr) => {
    onChangeMenu(!curr);
  };

  return (
    <>
      <SidePanel closeMenu>
        <ProfileSection>
          <ProfileSectionClose>
            <OpenLinksButton onClick={() => mobileMenu(extendNav)}>
              <>&#10005;</>
            </OpenLinksButton>
          </ProfileSectionClose>
          <ProfileImage
            src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNTg5MzMwMV5BMl5BanBnXkFtZTcwMzA2NTIyMw@@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
            height={91}
            width={91}
          />
          <ProfileName>Eric Hoffman</ProfileName>
        </ProfileSection>
        <MenuSection>
          <MenuWrapper>
            <MenuWrapperInner1>
              <MenuIcon>
                <IconMenuDiscover />
              </MenuIcon>
            </MenuWrapperInner1>
            <MenuWrapperInner2>
              <MenuName className="active">Discover</MenuName>
              <MenuActiveDiv />
            </MenuWrapperInner2>
          </MenuWrapper>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuPlaylist />
            </MenuIcon>
            <MenuName>PlayList</MenuName>
          </MenuWrapper>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuMovie />
            </MenuIcon>
            <MenuName>Movie</MenuName>
          </MenuWrapper>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuTVShows />
            </MenuIcon>
            <MenuName>TV Shows</MenuName>
          </MenuWrapper>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuMyList />
            </MenuIcon>
            <MenuName>My List</MenuName>
          </MenuWrapper>
        </MenuSection>
        <WatchLaterSection>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuWatchLater />
            </MenuIcon>
            <MenuName>Watch Later</MenuName>
          </MenuWrapper>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuRecommended />
            </MenuIcon>
            <MenuName>Recommended</MenuName>
          </MenuWrapper>
        </WatchLaterSection>
        <SettingSection>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuSettings />
            </MenuIcon>
            <MenuName>Settings</MenuName>
          </MenuWrapper>
          <MenuWrapper>
            <MenuIcon>
              <IconMenuLogout />
            </MenuIcon>
            <MenuName>Logout</MenuName>
          </MenuWrapper>
        </SettingSection>
      </SidePanel>
    </>
  );
};

export default SideMenuComp;
