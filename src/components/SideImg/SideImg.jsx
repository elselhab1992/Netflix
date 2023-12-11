/* eslint-disable react/prop-types */
import { Container, Img } from "./SideImgStyles";

const SideImg = ({ img }) => {
  return (
    <Container>
      <Img src={img} alt="movie" />
    </Container>
  );
};

export default SideImg;
