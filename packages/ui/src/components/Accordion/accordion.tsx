import {
  Accordion as ChakraAccordion,
  useAccordion,
  useAccordionContext,
  useAccordionItemContext,
} from '@chakra-ui/react';

export const Accordion = {
  ...ChakraAccordion,
} as typeof ChakraAccordion;

export { useAccordion, useAccordionContext, useAccordionItemContext };
