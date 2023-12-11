/* eslint-disable react/prop-types */
import { PrimaryButton, SecondaryButton } from "./ButtonStyles";

const Primary = ({ children }) => {
  return <PrimaryButton>{children}</PrimaryButton>;
};

const Secondary = ({ children }) => {
  return <SecondaryButton>{children}</SecondaryButton>;
};

export { Primary, Secondary };
