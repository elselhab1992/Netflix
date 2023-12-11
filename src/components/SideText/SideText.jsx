/* eslint-disable react/prop-types */
import { Container, Heading, Text } from "./SideTextStyles";

const SideText = ({ heading, text }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Container>
  );
};

export default SideText;
