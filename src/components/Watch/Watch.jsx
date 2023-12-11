import { SideImg, SideText } from "../index";
import watch from "../../assets/feature-3.png";
import { Section } from "../Enjoy/EnjoyStyles";

const Watch = () => {
  return (
    <Section>
      <SideText
        heading="watch everywhere."
        text="stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
      />
      <SideImg img={watch} />
    </Section>
  );
};

export default Watch;
