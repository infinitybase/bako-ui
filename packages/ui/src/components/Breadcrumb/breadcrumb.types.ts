import type { Breadcrumb as ChakraBreadcrumb } from '@chakra-ui/react';

export type BreadcrumbRootProps = React.ComponentProps<
  typeof ChakraBreadcrumb.Root
>;
export type BreadcrumbListProps = React.ComponentProps<
  typeof ChakraBreadcrumb.List
>;
export type BreadcrumbItemProps = React.ComponentProps<
  typeof ChakraBreadcrumb.Item
>;
export type BreadcrumbLinkProps = React.ComponentProps<
  typeof ChakraBreadcrumb.Link
>;
export type BreadcrumbCurrentLinkProps = React.ComponentProps<
  typeof ChakraBreadcrumb.CurrentLink
>;
export type BreadcrumbSeparatorProps = React.ComponentProps<
  typeof ChakraBreadcrumb.Separator
>;
export type BreadcrumbEllipsisProps = React.ComponentProps<
  typeof ChakraBreadcrumb.Ellipsis
>;
