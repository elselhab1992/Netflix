import GlobalStyles from "./GlobalStyles";
import Theme from "./Theme";
import {
  Navbar,
  Hero,
  Enjoy,
  Download,
  Watch,
  Children,
  AccordionItems,
  Ready,
  Footer,
} from "./components";

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Enjoy />
      <Download />
      <Watch />
      <Children />
      <AccordionItems />
      <Ready />
      <Footer />
    </Theme>
  );
};

export default App;
