import type { IconProps } from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/react';
import type { FC } from 'react';

export const CloseIcon: FC<IconProps> = createIcon({
  displayName: 'CloseIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 0.48 0.48"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <title>close</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m0.24 0.261 0.109 0.109 0.021 -0.021L0.261 0.24l0.109 -0.109 -0.021 -0.021L0.24 0.219 0.131 0.109l-0.021 0.021L0.219 0.24l-0.109 0.109 0.021 0.021z"
      />
    </svg>
  ),
});
