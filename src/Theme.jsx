/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#d11717",
    white: "#fff",
    secondary: "#000",
    grey: "#37383b",
  },
  fontSize: {
    small: "18px",
    normal: "20px",
    medium: "25px",
    large: "40px",
    xl: "60px",
  },
  fontWeight: {
    extraLight: "200",
    light: "300",
    Regular: "400",
    SemiBold: "600",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
