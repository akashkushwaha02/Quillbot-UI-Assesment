import {
  ProfileSection,
  ProfileName,
  ProfileImage,
  OpenLinksButton,
  ProfileSectionClose,
} from "../../../styles/App.styles";

const Profile = ({ mobileMenu }) => {
  return (
    <ProfileSection>
      <ProfileSectionClose>
        <OpenLinksButton onClick={() => mobileMenu(false)}>
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
  );
};

export default Profile;
