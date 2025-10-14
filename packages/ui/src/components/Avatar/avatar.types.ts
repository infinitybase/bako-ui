import type { Avatar as ChakraAvatar, GroupProps } from '@chakra-ui/react';

export interface AvatarProps extends ChakraAvatar.RootProps {
  /**
   * The name to derive the initials from. If not provided, the fallback will display a generic icon
   */
  name?: string;
  /**
   * The source URL of the avatar image to display.
   */
  src?: string;
  fallback?: React.ReactNode;
  slotProps?: {
    image?: ChakraAvatar.ImageProps;
    fallback?: ChakraAvatar.FallbackProps;
  };
}

export interface AvatarGroupProps extends GroupProps {}
