import { Avatar as ChakraAvatar, Group, useAvatar } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle } from '../Skeleton';
import type { AvatarGroupProps, AvatarProps } from './avatar.types';

export function Avatar({
  name,
  src,
  fallback,
  slotProps,
  shape = 'full',
  ...rest
}: AvatarProps) {
  const avatar = useAvatar();
  const { image: imageProps = {}, fallback: fallbackProps = {} } =
    slotProps || {};

  const SkeletonComponent = shape === 'full' ? SkeletonCircle : Skeleton;

  const isLoading = !!(src && !avatar.loaded);

  return (
    <ChakraAvatar.Root shape={shape} {...rest}>
      {src && (
        <SkeletonComponent boxSize="full" loading={isLoading}>
          <ChakraAvatar.Image
            onLoad={avatar.setLoaded}
            src={src}
            alt={name}
            {...imageProps}
          />
        </SkeletonComponent>
      )}
      {!isLoading && (
        <ChakraAvatar.Fallback name={name} {...fallbackProps}>
          {fallback || (name ? undefined : <ChakraAvatar.Icon />)}
        </ChakraAvatar.Fallback>
      )}
    </ChakraAvatar.Root>
  );
}

export function AvatarGroup(props: AvatarGroupProps) {
  return <Group {...props} />;
}

export default Avatar;
