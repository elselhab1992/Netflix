/* eslint-disable react/prop-types */
import { useState } from "react";
import { Head, Heading, Text, AccordionContent } from "./AccordionStyles";

const Accordion = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionContent>
      <Head onClick={() => setIsActive(!isActive)}>
        <Heading>{title}</Heading>
        <Heading>{isActive ? "-" : "+"}</Heading>
      </Head>
      {isActive && <Text>{text}</Text>}
    </AccordionContent>
  );
};

export default Accordion;
