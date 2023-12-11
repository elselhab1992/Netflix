import styled from "styled-components";
import { Section } from "../Enjoy/EnjoyStyles";

const DownloadSection = styled(Section)`
  @media (min-width: 300px) {
    flex-direction: column-reverse;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export { DownloadSection };
