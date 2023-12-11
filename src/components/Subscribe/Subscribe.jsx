import { Input, InputContainer, Button, Arrow } from "./SubscribeStyles";

const Subscribe = () => {
  return (
    <InputContainer>
      <Input type="email" id="email" name="email" placeholder="Email address" />
      <Button>
        Get Started
        <Arrow />
      </Button>
    </InputContainer>
  );
};

export default Subscribe;
