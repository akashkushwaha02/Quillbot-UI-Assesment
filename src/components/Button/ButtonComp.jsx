import {
  ButtonPlayMovie,
  ButtonWatch,
  Typography1,
  Typography2,
} from "../Container/App.styles";

const ButtonComp = (props) => {
  const { label, filled } = props;

  console.log(filled, "fillled props ");

  return (
    <>
      <ButtonPlayMovie filled={filled}>
        <Typography1>{label}</Typography1>
      </ButtonPlayMovie>
    </>
  );
};

export default ButtonComp;
