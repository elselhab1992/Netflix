import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  padding: 0px 5px 2rem 5px;
  color: ${(props) => props.theme.colors.white};
  border-top: 5px solid ${(props) => props.theme.colors.grey};
  border-bottom: 5px solid ${(props) => props.theme.colors.grey};

  @media (min-width: 300px) {
    flex-direction: column;
    gap: 0;
    padding: 1rem 5px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    gap: 10rem;
    padding: 0 5px 2rem 5px;
  }
`;

export { Section };
