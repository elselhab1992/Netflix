import styled from "styled-components";
import { SecondaryButton } from "../Button/ButtonStyles";
import { FaAngleRight } from "react-icons/fa";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media (min-width: 300px) {
    width: 100%;
    padding: 5px;
  }

  @media (min-width: 768px) {
    width: 70%;
    padding: 0;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

const Input = styled.input`
  width: 80%;
  padding: 25px;

  @media (min-width: 300px) {
    padding: 20px;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Button = styled(SecondaryButton)`
  width: 250px;
  padding: 20px;
  border-radius: 0;
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  font-size: ${(props) => props.theme.fontSize.medium};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    width: 200px;
    padding: 15px 0;
    font-size: ${(props) => props.theme.fontSize.small};
  }
`;

const Arrow = styled(FaAngleRight)`
  font-weight: ${(props) => props.theme.fontWeight.SemiBold};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-left: 10px;
`;

export { Input, InputContainer, Button, Arrow };
