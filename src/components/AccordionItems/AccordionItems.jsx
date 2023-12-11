import accordionData from "../../accordionData";
import { Accordion } from "../index";
import { Section, Heading, AccordionContent } from "./AccordionItemsStyles";

const AccordionItems = () => {
  return (
    <Section>
      <Heading>frequently asked question</Heading>
      <AccordionContent>
        {accordionData.map(({ title, text, id }) => (
          <Accordion title={title} text={text} key={id} />
        ))}
      </AccordionContent>
    </Section>
  );
};

export default AccordionItems;
