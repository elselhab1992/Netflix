import { Section, Container, Heading, Text } from "./HeroStyles";
import { Subscribe } from "../index";

const Hero = () => {
  return (
    <Section>
      <Container>
        <Heading>
          unlimited movies, TV
          <br />
          shows and more.
        </Heading>
        <h2>watch anywhere, cancel anytime.</h2>
        <Text>
          ready to watch? enter your email to create or restart your membership.
        </Text>
        <Subscribe />
      </Container>
    </Section>
  );
};

export default Hero;
