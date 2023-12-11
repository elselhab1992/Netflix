import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5rem;
  padding: 2rem 0;
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 4, 10, 0.4);

  @media (min-width: 300px) {
    padding: 1rem;
    justify-content: space-between;
  }

  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Img = styled.img`
  width: 150px;

  @media (min-width: 300px) {
    width: 120px;
  }

  @media (min-width: 768px) {
    width: 150px;
  }
`;

export { Header, Nav, Img };
