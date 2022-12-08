import { useState } from "react";
import {
  Header,
  ThemeChanger,
  ThreeDotMenu,
  ThemeMenuWrapper,
  OpenLinksButton,
} from "../Container/App.styles";
import SearchComp from "../Search/SearchComp";
import IconTheme from "../../assets/svg/IconTheme";
import IconThreeDotsMenu from "../../assets/svg/IconThreeDotsMenu";

const HeaderComp = ({ onChange, onClickMenu, onClear }) => {
  const [extendNav, setExtendNav] = useState(false);
  const handleSearch = (e) => {
    console.log(e, "handle Search");
    onChange(e);
  };

  const mobileMenu = () => {
    setExtendNav(!extendNav);
    onClickMenu(extendNav);
  };
  return (
    <>
      <Header>
        <OpenLinksButton onClick={mobileMenu}>
          {extendNav ? <>&#10005;</> : <>&#8801;</>}
        </OpenLinksButton>
        <SearchComp onChange={handleSearch} onClear={onClear} />

        <ThemeMenuWrapper>
          <ThemeChanger>
            <IconTheme />
          </ThemeChanger>
          <ThreeDotMenu>
            <IconThreeDotsMenu />
          </ThreeDotMenu>
        </ThemeMenuWrapper>
      </Header>
    </>
  );
};

export default HeaderComp;
