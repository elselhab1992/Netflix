import styled from "styled-components";

const PrimaryButton = styled.button`
  width: 120px;
  padding: 15px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 0 1px ${(props) => props.theme.colors.white};
  transition: 700ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }

  @media (min-width: 300px) {
    width: 100px;
    padding: 10px;
  }

  @media (min-width: 768px) {
    width: 120px;
    padding: 15px;
  }
`;

const SecondaryButton = styled.button`
  width: 120px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  transition: 700ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: 300px) {
    width: 90px;
    padding: 10px;
  }

  @media (min-width: 768px) {
    padding: 10px;
  }
`;

export { PrimaryButton, SecondaryButton };
