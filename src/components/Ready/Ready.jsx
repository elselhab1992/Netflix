import {
  Section,
  Text,
  InputField,
  InputDiv,
  Button,
  ArrowRight,
} from "./ReadyStyles";

const Ready = () => {
  return (
    <Section>
      <Text>
        Ready to watch? Enter your email to create or restart your membership.
      </Text>
      <InputDiv>
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
        />
        <Button>
          Get Started <ArrowRight />
        </Button>
      </InputDiv>
    </Section>
  );
};

export default Ready;
