import { SideImg, SideText } from "../index";
import enjoy from "../../assets/feature-1.png";
import { Section } from "./EnjoyStyles";

const Enjoy = () => {
  return (
    <Section>
      <SideText
        heading="enjoy on your TV."
        text="watch on smart TVs, PlayStation, xbox,apple TV, Blu-ray players and more."
      />
      <SideImg img={enjoy} />
    </Section>
  );
};

export default Enjoy;
