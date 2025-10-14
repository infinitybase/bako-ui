import type { IconProps } from '@chakra-ui/react';
import { createIcon } from '@chakra-ui/react';
import type { FC } from 'react';

export const CheckIcon: FC<IconProps> = createIcon({
  displayName: 'CheckIcon',
  viewBox: '0 0 24 24',
  path: (
    <svg
      fill="currentColor"
      width="24px"
      height="24px"
      viewBox="0 0 0.72 0.72"
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 24 24"
    >
      <title>check</title>
      <path d="M0.561 0.216c-0.012 -0.012 -0.03 -0.012 -0.042 0l-0.225 0.225 -0.093 -0.093c-0.012 -0.012 -0.03 -0.012 -0.042 0s-0.012 0.03 0 0.042l0.114 0.114c0.006 0.006 0.012 0.009 0.021 0.009s0.015 -0.003 0.021 -0.009l0.246 -0.246c0.012 -0.012 0.012 -0.03 0 -0.042" />
    </svg>
  ),
});
