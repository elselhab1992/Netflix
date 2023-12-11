import logo from "../../assets/logo.png";
import { Header, Nav, Img } from "./NavbarStyles";
import { Secondary } from "../Button/Button";

const Navbar = () => {
  return (
    <Header>
      <Img src={logo} alt="logo" />
      <Nav>
        <Secondary>Sign In</Secondary>
      </Nav>
    </Header>
  );
};

export default Navbar;
