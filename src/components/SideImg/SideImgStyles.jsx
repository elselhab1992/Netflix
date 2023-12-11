import styled from "styled-components";

const Container = styled.div`
  width: 600px;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 600px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export { Container, Img };
