import styled from "styled-components";
import banner from "../../assets/header-image.png";

const Section = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.colors.white};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 20%;
  text-align: center;

  @media (min-width: 300px) {
    padding: 70% 5px;
  }

  @media (min-width: 768px) {
    padding: 50% 5px;
  }

  @media (min-width: 1024px) {
    padding: 20% 5px;
  }
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xl};
  line-height: 1;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
`;

export { Section, Container, Heading, Text };
