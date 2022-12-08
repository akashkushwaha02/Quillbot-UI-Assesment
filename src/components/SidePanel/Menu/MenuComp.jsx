import {
  MenuSection,
  WatchLaterSection,
  SettingSection,
  MenuWrapper,
  MenuIcon,
  MenuName,
  MenuActiveDiv,
  MenuWrapperInner1,
  MenuWrapperInner2,
} from "../../../styles/App.styles";
import IconMenuLogout from "../../../assets/svg/IconMenuLogout";
import IconMenuDiscover from "../../../assets/svg/IconMenuDiscover";
import IconMenuPlaylist from "../../../assets/svg/IconMenuPlaylist";
import IconMenuMovie from "../../../assets/svg/IconMenuMovie";
import IconMenuTVShows from "../../../assets/svg/IconMenuTVShows";
import IconMenuMyList from "../../../assets/svg/IconMenuMyList";
import IconMenuWatchLater from "../../../assets/svg/IconMenuWatchLater";
import IconMenuRecommended from "../../../assets/svg/IconMenuRecomended";
import IconMenuSettings from "../../../assets/svg/IconMenuSettings";
import useWindowSize from "../../../Hooks/useWindowSize";

const MenuComp = () => {
  const mobileView = useWindowSize();

  return (
    <>
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
          <MenuName>
            Settings {mobileView.width < 420 ? "/More Options" : null}
          </MenuName>
        </MenuWrapper>
        <MenuWrapper>
          <MenuIcon>
            <IconMenuLogout />
          </MenuIcon>
          <MenuName>Logout</MenuName>
        </MenuWrapper>
      </SettingSection>
    </>
  );
};

export default MenuComp;
