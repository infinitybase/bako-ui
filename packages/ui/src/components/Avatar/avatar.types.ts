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
  /**
   * The fallback content to display when the image fails to load.
   */
  fallback?: React.ReactNode;
  /**
   * Props to pass to the different slots of the Avatar component
   */
  slotProps?: {
    image?: ChakraAvatar.ImageProps;
    fallback?: ChakraAvatar.FallbackProps;
  };
}

export interface AvatarGroupProps extends GroupProps {}
