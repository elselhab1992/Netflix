import {
  FooterContainer,
  MainContainer,
  Container,
  Language,
  Dropdown,
  BtnContainer,
} from "./FooterStyles";
import { Primary } from "../Button/Button";

const Footer = () => {
  return (
    <FooterContainer>
      <MainContainer>
        <p>Questions? Call 0808 196 5391</p>
        <Container>
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Buy gift cards</li>
            <li>Cookie Preferences</li>
            <li>Legal Guarantee</li>
          </ul>
          <ul>
            <li>Help Centre</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Netflix Shop</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>Only on Netflix</li>
          </ul>
          <ul>
            <li>Media Centre</li>
            <li>Redeem gift cards</li>
            <li>Privacy</li>
            <li>Speed Test</li>
            <li>Advert choices</li>
          </ul>
        </Container>
        <Primary>
          <BtnContainer>
            <Language />
            <p>English</p>
            <Dropdown />
          </BtnContainer>
        </Primary>
        <p>Netflix United Kingdom</p>
      </MainContainer>
    </FooterContainer>
  );
};

export default Footer;
