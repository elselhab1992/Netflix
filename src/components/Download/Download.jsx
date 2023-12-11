import { SideImg, SideText } from "../index";
import download from "../../assets/feature-2.png";
import { DownloadSection } from "./DownloadStyles";

const Download = () => {
  return (
    <DownloadSection>
      <SideImg img={download} />
      <SideText
        heading="download and watch offline."
        text="save your favourites easily and always have something to watch."
      />
    </DownloadSection>
  );
};

export default Download;
