import { defineStyle } from '@chakra-ui/react';

export const floatingStyles = ({
  hasValue,
  withStartIcon,
}: {
  hasValue: boolean;
  withStartIcon: boolean;
}) =>
  defineStyle({
    pos: 'absolute',
    px: '1',
    top: hasValue ? '0' : '50%',
    transform: hasValue ? 'none' : 'translateY(-50%)',
    insetStart: withStartIcon ? '9' : '2.5',
    color: 'bg.emphasized',
    fontWeight: 'normal',
    pointerEvents: 'none',
    transition: 'all 0.2s',
    fontSize: hasValue ? '2xs' : 'sm',
    _peerPlaceholderShown: {
      insetStart: withStartIcon ? '9' : '2.5',
    },
    _peerFocusVisible: {
      top: '0',
      transform: 'none',
      insetStart: withStartIcon ? '9' : '2.5',
      fontSize: '2xs',
    },
  });
