import {
  Badge,
  Combobox,
  Field,
  Flex,
  HStack,
  Image,
  Portal,
  Span,
  Spinner,
  useCombobox,
  useFilter,
  useListCollection,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import {
  type FieldPath,
  type FieldValues,
  useController,
} from 'react-hook-form';
import { floatingStyles } from '../../helpers/floating-styles';
import type { RhfComboboxProps } from './rhf-combobox.types';

export function RhfCombobox<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  defaultValue,
  label,
  error,
  options,
  disabled = false,
  helperText,
  multiple = false,
  isLoadingOptions = false,
  noOptionsText = 'No items found',
  openOnFocus = true,
  slotProps,
  variant,
  clearTriggerIcon,
  showTrigger = false,
}: RhfComboboxProps<TFieldValues, TName>) {
  const {
    field: { value, onChange, ref, ...rest },
  } = useController({ defaultValue, control, name });
  const { contains } = useFilter({ sensitivity: 'base' });
  const { collection, filter } = useListCollection({
    initialItems: options,
    filter: contains,
  });

  const combobox = useCombobox({
    collection,
    onInputValueChange(e) {
      filter(e.inputValue);
    },
    onValueChange(selected) {
      if (selected) {
        if (multiple) {
          onChange(selected.value);
        } else {
          onChange(selected.value[0]);
        }
      }
    },
    value: [...(value || [])],
    disabled,
    invalid: !!error,
    multiple,
    openOnClick: openOnFocus,
    ...slotProps?.root,
  });

  const hasValue = useMemo(
    () =>
      (Array.isArray(value) ? false : !!value) ||
      combobox.inputValue.length > 0,
    [value, combobox.inputValue]
  );

  const activeFloating = hasValue || combobox.open;

  const inputProps = label
    ? {
        pt: 2,
        px: 3,
        placeholder: '',
      }
    : {};

  return (
    <Field.Root invalid={!!error}>
      {label && (
        <Field.Label
          color="bg.emphasized"
          htmlFor={rest.name}
          {...slotProps?.label}
          css={floatingStyles({
            hasValue: activeFloating,
            withStartIcon: false,
          })}
        >
          {label}
        </Field.Label>
      )}
      <Combobox.RootProvider
        value={combobox}
        width="full"
        size={slotProps?.root?.size}
        variant={variant}
        borderRadius="lg"
      >
        <Combobox.Control>
          <Combobox.Input color="fg" ref={ref} {...inputProps} {...rest} />
          <Combobox.IndicatorGroup>
            {clearTriggerIcon ? (
              <Combobox.ClearTrigger color="unset" asChild>
                {clearTriggerIcon}
              </Combobox.ClearTrigger>
            ) : (
              <Combobox.ClearTrigger color="unset" />
            )}
            {showTrigger && <Combobox.Trigger />}
          </Combobox.IndicatorGroup>
        </Combobox.Control>
        {multiple && (
          <Flex gap={2} flexWrap="wrap" position="absolute" bottom={-7}>
            {(value as string[]).map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </Flex>
        )}
        {helperText && <Field.HelperText>{helperText}</Field.HelperText>}
        {error && <Field.ErrorText>{error.message}</Field.ErrorText>}
        <Portal>
          <Combobox.Positioner>
            <Combobox.Content>
              <Combobox.Empty>{noOptionsText}</Combobox.Empty>
              {isLoadingOptions && (
                <HStack p="2">
                  <Spinner size="xs" borderWidth="1px" />
                  <Span>Loading...</Span>
                </HStack>
              )}
              {!isLoadingOptions &&
                collection.items.map((item) => (
                  <Combobox.Item item={item} key={item.value}>
                    {!item.imageUrl && item.label}
                    {item.imageUrl && (
                      <Flex gap={2} align="center">
                        <Image
                          src={item.imageUrl}
                          boxSize="5"
                          alt={`${item.label} image`}
                        />
                        <Span>{item.label}</Span>
                      </Flex>
                    )}
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                ))}
            </Combobox.Content>
          </Combobox.Positioner>
        </Portal>
      </Combobox.RootProvider>
    </Field.Root>
  );
}
