import { ButtonPlayMovie, Typography1 } from "../../styles/App.styles";

const ButtonComp = (props) => {
  const { label, filled, color, outlined } = props;

  return (
    <>
      <ButtonPlayMovie filled={filled} outlined={outlined}>
        <Typography1 color={color}>{label}</Typography1>
      </ButtonPlayMovie>
    </>
  );
};

export default ButtonComp;
