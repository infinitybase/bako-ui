import { Textarea as ChakraTextarea } from '@chakra-ui/react';
import type { TextAreaProps } from './text-area.types';

export default function TextArea(props: TextAreaProps) {
  return <ChakraTextarea {...props} />;
}
