import styled from "styled-components";

const Container = styled.div`
  width: 30%;

  @media (min-width: 300px) {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 30%;
    text-align: left;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};
  line-height: 1;
  margin-bottom: 1rem;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export { Container, Heading, Text };
