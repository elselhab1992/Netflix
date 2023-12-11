import { SideImg, SideText } from "../index";
import { DownloadSection } from "../Download/DownloadStyles";
import children from "../../assets/feature-4.png";

const Children = () => {
  return (
    <DownloadSection>
      <SideImg img={children} />
      <SideText
        heading="download and watch offline."
        text="save your favourites easily and always have something to watch."
      />
    </DownloadSection>
  );
};

export default Children;
