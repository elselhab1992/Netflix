import styled from "styled-components";
import { SecondaryButton } from "../Button/ButtonStyles";
import { Input, InputContainer, Arrow } from "../Subscribe/SubscribeStyles";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.small};
  padding: 3rem 0;

  @media (min-width: 300px) {
    gap: 0.5rem;
    padding-top: 1rem;
  }

  @media (min-width: 1200px) {
    gap: 1rem;
    padding-top: 2rem;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const InputDiv = styled(InputContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;

  @media (min-width: 300px) {
    width: 100%;
    padding: 5px;
  }

  @media (min-width: 768px) {
    width: 80%;
    padding: 0;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

const InputField = styled(Input)`
  width: 50%;
  padding: 25px;
  background-color: transparent;
  border: 1px solid #d4d7d9;

  @media (min-width: 300px) {
    padding: 10px;
    width: 60%;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 15px;
  }

  @media (min-width: 1024px) {
    width: 50%;
    padding: 20px;
  }
`;

const Button = styled(SecondaryButton)`
  width: 230px;
  border-radius: 5px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    width: 140px;
    padding: 5px 0;
    font-size: ${(props) => props.theme.fontSize.small};
  }

  @media (min-width: 768px) {
    width: 200px;
    padding: 12px 0;
  }

  @media (min-width: 1024px) {
    padding: 17px 0;
  }
`;

const ArrowRight = styled(Arrow)`
  font-weight: ${(props) => props.theme.fontWeight.SemiBold};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-left: 10px;
`;

export { Section, Text, InputField, InputDiv, Button, ArrowRight };
