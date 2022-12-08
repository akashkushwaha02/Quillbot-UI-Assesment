import { SidePanel } from "../../styles/App.styles";
import Profile from "./Profile/ProfileComp";
import MenuComp from "./Menu/MenuComp";

const SideMenuComp = ({ extendNav, onChangeMenu }) => {
  const mobileMenu = (curr) => {
    onChangeMenu(curr);
  };

  return (
    <>
      <SidePanel closeMenu={extendNav}>
        <Profile mobileMenu={mobileMenu} />
        <MenuComp />
      </SidePanel>
    </>
  );
};

export default SideMenuComp;
