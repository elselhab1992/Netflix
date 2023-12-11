import styled from "styled-components";
import { MdLanguage } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const FooterContainer = styled.footer`
  border-top: 5px solid ${(props) => props.theme.colors.grey};
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  color: ${(props) => props.theme.colors.white};
  padding: 2rem 15rem;
  margin: auto;
  width: 80%;

  @media (min-width: 300px) {
    width: 100%;
    padding: 0.5rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (min-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    padding: 2rem 15rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10rem;

  @media (min-width: 300px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    gap: 10rem;
  }
`;

const Language = styled(MdLanguage)`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.white};
`;

const Dropdown = styled(FaCaretDown)`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.white};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export {
  FooterContainer,
  MainContainer,
  Container,
  Language,
  Dropdown,
  BtnContainer,
};
