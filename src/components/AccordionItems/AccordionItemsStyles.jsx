import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  color: ${(props) => props.theme.colors.white};

  @media (min-width: 300px) {
    gap: 0.5rem;
    padding: 0.5rem;
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    padding: 1rem 0;
  }
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSize.xl};

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.large};
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSize.xl};
  }
`;

const AccordionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  width: 60%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
`;

export { Section, Heading, AccordionContent };
