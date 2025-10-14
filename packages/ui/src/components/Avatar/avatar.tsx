import { Avatar as ChakraAvatar, Group } from '@chakra-ui/react';
import type { AvatarGroupProps, AvatarProps } from './avatar.types';

export function Avatar(props: AvatarProps) {
  const { name, src, fallback, slotProps, ...rest } = props;

  const { image: imageProps = {}, fallback: fallbackProps = {} } =
    slotProps || {};

  return (
    <ChakraAvatar.Root {...rest}>
      {src && <ChakraAvatar.Image src={src} alt={name} {...imageProps} />}
      <ChakraAvatar.Fallback name={name} {...fallbackProps}>
        {fallback || (name ? undefined : <ChakraAvatar.Icon />)}
      </ChakraAvatar.Fallback>
    </ChakraAvatar.Root>
  );
}

export function AvatarGroup(props: AvatarGroupProps) {
  return <Group {...props} />;
}

export default Avatar;
