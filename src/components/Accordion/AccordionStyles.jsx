import styled from "styled-components";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionContent = styled.div`
  background-color: #3e4042;
  width: 100%;
  padding: 15px;
  transition: 700ms;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.grey};
  }
`;

const Heading = styled.h4`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  padding: 0.5rem;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

const Text = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.Regular};
  padding: 0.5rem;

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSize.small};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`;

export { Head, Heading, Text, AccordionContent };
